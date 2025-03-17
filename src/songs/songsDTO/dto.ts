/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty, IsArray, IsDate } from 'class-validator';

export class SongsDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @IsArray()
  readonly artist: string[];

  @IsDate()
  @IsNotEmpty()
  readonly releaseDate: Date;

  @IsDate()
  @IsNotEmpty()
  readonly duration: Date;
}
