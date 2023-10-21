import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findAllPosts() {
  try {
    const posts = prisma.post.findMany({
      include: {
        pagePosts: true
      }
    })

    return posts
  } catch (error) {
    return {}
  }
}

async function findPostById(id: number) {
  try {
    const post = prisma.post.findUnique({
      where: {
        id
      },
      include: {
        pagePosts: true
      }
    })

    return post
  } catch (error) {
    return {}
  }
}

interface IPost {
  title: string;
  authorId: number;
  content: string;
  pageId: number;
}

async function createPost({ title, authorId, content, pageId }: IPost) {
  try {
    const post = prisma.post.create({
      data: {
        title,
        authorId,
        content,
        published: true,
        pageId
      }
    })

    return post
  } catch (error) {
    return {}
  }
}

export {
  findAllPosts,
  findPostById,
  createPost
}