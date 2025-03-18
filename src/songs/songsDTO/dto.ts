/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsMilitaryTime,
  IsDateString,
} from 'class-validator';

export class SongsDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString({ each: true })
  @IsNotEmpty()
  @IsArray()
  readonly artist: string[];

  @IsDateString()
  @IsNotEmpty()
  readonly releaseDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date;
}
