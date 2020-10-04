import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/jwt-payload.interface';
import { MailService } from '../shared/mail.service';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
        private mailService: MailService,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        await this.userRepository.signUp(authCredentialsDto);
        await this.mailService.sendRegMail(authCredentialsDto);
    }

    async singIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        const user = await this.userRepository.validateUserPassword(authCredentialsDto);

        if (!user) {
            throw new UnauthorizedException();
        }

        const payload: JwtPayload = this.createJwtPayload(user);
        const accessToken = await this.jwtService.signAsync(payload);

        return { accessToken };
    }
    private createJwtPayload(user: User): JwtPayload {
        return { email: user.email, privileges: user.privileges.map(priv => priv.name) };
    }

    async singInWithUser(user: User): Promise<{ accessToken: string }> {
        const { email } = user;

        if (!email) {
            throw new UnauthorizedException();
        }

        const payload: JwtPayload = this.createJwtPayload(user);
        const accessToken = await this.jwtService.signAsync(payload);

        return { accessToken };
    }
}
