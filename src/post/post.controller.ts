import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Get(':id')
  getPostById(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getPostById(id);
  }

  @Post()
  createPost(
    @Body() body: { title: string; description: string; authorName: string },
  ) {
    return this.postService.createPost(
      body.title,
      body.description,
      body.authorName,
    );
  }

  @Put(':id')
  updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { title?: string; description?: string; authorName?: string },
  ) {
    return this.postService.updatePost(
      id,
      body.title,
      body.description,
      body.authorName,
    );
  }

  @Delete(':id')
  deletePost(@Param('id', ParseIntPipe) id: number) {
    return this.postService.deletePost(id);
  }
}
