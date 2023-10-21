import { Request, Response } from "express"
import { findAllUsers, findUserById, createUser } from "../services/userService"

async function getAllUsersController(req: Request, res: Response) {
  const users = await findAllUsers()

  res.status(200).json(users)
}

async function getUserByIdController(req: Request, res: Response) {
  const id = parseInt(req.params.id)

  const user = await findUserById(id)

  res.status(200).json(user)
}

async function createUserController(req: Request, res: Response) {
  const { name, email, password } = req.body

  const user = await createUser({ name, email, password })

  res.status(200).json(user)
}

export {
  getAllUsersController,
  getUserByIdController,
  createUserController
}