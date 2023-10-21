import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findAllUsers() {
  try {
    const users = prisma.user.findMany({
      include: {
        pages: true,
        posts: true
      }
    })

    return users
  } catch (error) {
    return {}
  }
}

async function findUserById(id: number) {
  try {
    const user = prisma.user.findUnique({
      where: {
        id
      },
      include: {
        pages: true,
        posts: true
      }
    })

    return user
  } catch (error) {
    return {}
  }
}

interface IUser {
  name: string;
  email: string;
  password: string;
}

async function createUser({ name, email, password }: IUser) {
  try {
    const user = prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return user
  } catch (error) {
    return {}
  }
}

export {
  findAllUsers,
  findUserById,
  createUser
}