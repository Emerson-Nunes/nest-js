import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {


    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1,
        minNumbers: 3
    })
    password: string;

}