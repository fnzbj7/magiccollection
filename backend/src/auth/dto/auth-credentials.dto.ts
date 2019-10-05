import { IsString, Matches, IsEmail, Length, IsOptional, IsNumberString } from 'class-validator';

export class AuthCredentialsDto {

    @IsOptional({groups: ['signin']})
    @IsString({always: true})
    @Length(4, 20, {always: true})
    username: string;

    @IsEmail({}, {always: true})
    @Length(4, 20, {always: true})
    email: string;

    @IsString({always: true})
    @Length(8, 20, {always: true})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            {message: 'password too weak', always: true})
    password: string;

    @IsOptional({groups: ['signin']})
    @IsNumberString( {always: true})
    @Length(3, 10, {always: true})
    dci: string;
}
