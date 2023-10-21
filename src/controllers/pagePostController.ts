import { Request, Response } from "express"
import { createPageToPost, findAllPageToPost, findPageToPostById } from "../services/pagePostService"

async function getAllPageToPostController(req: Request, res: Response) {
  const pageToPost = await findAllPageToPost()

  res.status(200).json(pageToPost)
}

async function getPageToPostByIdController(req: Request, res: Response) {
  const id = parseInt(req.params.id)

  const pageToPost = await findPageToPostById(id)

  res.status(200).json(pageToPost)
}

async function createPageToPostController(req: Request, res: Response) {
  const { title, postId, content } = req.body

  const pageToPost = await createPageToPost({ title, postId, content })

  res.status(200).json(pageToPost)
}

export {
  getAllPageToPostController,
  getPageToPostByIdController,
  createPageToPostController
}