import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsDTO } from './songsDTO/dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findOne() {
    return this.songsService.findAll();
  }

  @Post()
  createNew(@Body() createSongDTO: SongsDTO) {
    return this.songsService.create(createSongDTO);
  }
}
