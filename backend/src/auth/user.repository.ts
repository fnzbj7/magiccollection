import { Repository, EntityRepository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entity/user.entity';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { email, password, username, dci} = authCredentialsDto;

        const user = new User();
        user.name = username;
        user.email = email;
        user.dci = dci;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        try {
            await user.save();
        } catch (error) {
            console.log(error);
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('Email already exist');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { password, email} = authCredentialsDto;
        const user = await this.findOne({ email });
        if (user && await user.validatePassword(password)) {
            return user.email;
        } else {
            return null;
        }

    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}
