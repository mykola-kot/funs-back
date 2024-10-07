import {IsDefined, IsString} from "class-validator";

export class LoginDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsString()
  password: string;
}
