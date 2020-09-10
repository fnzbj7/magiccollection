import { Repository, EntityRepository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { User, UserSource } from './entity/user.entity';
import { ConflictException, InternalServerErrorException, Logger } from '@nestjs/common';
import { Profile } from 'passport-facebook-token';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    private logger = new Logger(UserRepository.name);

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { email, password, username, dci } = authCredentialsDto;

        const user = new User();
        user.name = username;
        user.email = email;
        user.dci = dci;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        user.source = UserSource.SITE;

        try {
            await user.save();
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('Email already exist');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<User> {
        const { password, email } = authCredentialsDto;
        const user = await this.findOne(
            { email, source: UserSource.SITE },
            { relations: ['privileges'] },
        );
        if (user && (await user.validatePassword(password))) {
            return user;
        } else {
            return null;
        }
    }

    async findOrCreate(profile: Profile): Promise<User> {
        const userFind = await this.findOne(
            {
                email: profile.emails[0].value,
                source: UserSource.FB,
            },
            { relations: ['privileges'] },
        );

        if (userFind) {
            return userFind;
        } else {
            const userCreate = new User();
            userCreate.name = profile.displayName;
            userCreate.email = profile.emails[0].value;
            userCreate.activated = true;
            userCreate.source = UserSource.FB;
            userCreate.privileges = [];
            try {
                await userCreate.save();
            } catch (error) {
                console.error(error);
                throw new InternalServerErrorException();
            }
            return userCreate;
        }

        // profile.
        // sd
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}
