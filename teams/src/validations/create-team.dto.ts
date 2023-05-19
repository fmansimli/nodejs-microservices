import { IsString, MinLength, MaxLength } from "class-validator";

export class CreateTeamDto {
  @IsString()
  @MinLength(10)
  @MaxLength(12)
  name: string;

  @IsString()
  @MinLength(20)
  @MaxLength(50)
  desc: string;
}
