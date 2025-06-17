import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PostController } from './post.controller';

@Module({
  imports: [PrismaModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
