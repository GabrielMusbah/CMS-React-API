import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function findAllUsers() {
  try {
    const users = prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
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
      select: {
        id: true,
        email: true,
        name: true,
        pages: true,
        posts: true
      }
    })

    return user
  } catch (error) {
    return {}
  }
}

async function findUserByEmail(email: string) {
  try {
    const user = prisma.user.findUnique({
      where: {
        email
      },
      select: {
        password: true
      }
    })

    return user
  } catch (error) {
    return { password: '' }
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
  findUserByEmail,
  createUser
}