import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findAllPageToPost() {
  try {
    const pageToPost = prisma.pagePost.findMany()

    return pageToPost
  } catch (error) {
    return {}
  }
}

async function findPageToPostById(id: number) {
  try {
    const pageToPost = prisma.pagePost.findUnique({
      where: {
        id
      }
    })

    return pageToPost
  } catch (error) {
    return {}
  }
}

interface IPageToPost {
  title: string;
  postId: number;
  content: string;
}

async function createPageToPost({ title, postId, content }: IPageToPost) {
  try {
    const pageToPost = prisma.pagePost.create({
      data: {
        title,
        content,
        published: true,
        postId
      }
    })

    return pageToPost
  } catch (error) {
    return {}
  }
}

export {
  findAllPageToPost,
  findPageToPostById,
  createPageToPost
}