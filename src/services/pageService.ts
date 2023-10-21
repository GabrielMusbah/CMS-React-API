import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findAllPages() {
  try {
    const pages = prisma.page.findMany({
      include: {
        posts: true
      }
    })

    return pages
  } catch (error) {
    return {}
  }
}

async function findPageById(id: number) {
  try {
    const page = prisma.page.findUnique({
      where: {
        id
      },
      include: {
        posts: true
      }
    })

    return page
  } catch (error) {
    return {}
  }
}

interface IPage {
  title: string;
  authorId: number;
  content: string;
}

async function createPage({ title, authorId, content }: IPage) {
  try {
    const page = prisma.page.create({
      data: {
        title,
        authorId,
        content,
        published: true
      }
    })

    return page
  } catch (error) {
    return {}
  }
}

export {
  findAllPages,
  findPageById,
  createPage
}