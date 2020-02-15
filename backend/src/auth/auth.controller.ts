import {
    Controller,
    Post,
    Body,
    ValidationPipe,
    Get,
    Req,
    UseGuards,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './entity/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(
        @Body(new ValidationPipe({ groups: ['signup'] }))
        authCredentialsDto: AuthCredentialsDto,
    ): Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(
        @Body(new ValidationPipe({ groups: ['signin'] }))
        authCredentialsDto: AuthCredentialsDto,
    ): Promise<{ accessToken: string }> {
        return this.authService.singIn(authCredentialsDto);
    }

    @UseGuards(AuthGuard('facebook-token'))
    @Get('facebook')
    async getTokenAfterFacebookSignIn(@GetUser() user: User) {
        return this.authService.singInWithUser(user);
    }

    @Get('/refreshtoken')
    @UseGuards(AuthGuard())
    async getCardSetUser(@GetUser() user: User) {
        return this.authService.singInWithUser(user);
    }
}
