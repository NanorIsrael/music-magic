import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { SongsController } from './songs/songs.controller';
// import { SongsService } from './songs/songs.service';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('songs');
  }
}
