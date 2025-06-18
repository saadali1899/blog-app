// src/post/post.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Post } from 'generated/prisma';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async getPostById(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async createPost(
    title: string,
    description: string,
    authorName: string,
  ): Promise<Post> {
    return this.prisma.post.create({
      data: { title, description, authorName },
    });
  }

  async updatePost(
    id: number,
    title?: string,
    description?: string,
    authorName?: string,
  ): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data: { title, description, authorName },
    });
  }

  async deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
