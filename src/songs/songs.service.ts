import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  findAll() {
    return 'Joe Mettle songs';
  }

  create(newSong: Song) {
    return JSON.stringify(newSong);
  }
}

interface Song {
  title: string;
  artist: string[];
  releaseDate: Date;
  duration: Date;
}
