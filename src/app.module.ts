// src/app.module.ts
import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
})
export class AppModule {}
