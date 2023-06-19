import {
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  postId: number;

  @IsNumber()
  @IsOptional()
  parentId: number;

  @IsString()
  @MinLength(5)
  @MaxLength(400)
  content: string;

  @IsString()
  @MinLength(3)
  @MaxLength(60)
  name: string;

  @IsString()
  @IsEmail()
  email: string;
}
