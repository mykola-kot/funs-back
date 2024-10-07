import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { Transform } from 'class-transformer'

export class UserDto {
    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    @Transform(({ value }) => value.toLowerCase())
    email!: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    name!: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    phone!: string
}
