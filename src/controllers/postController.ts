import { Request, Response } from "express"
import { createPost, findAllPosts, findPostById } from "../services/postService"

async function getAllPostsController(req: Request, res: Response) {
  const posts = await findAllPosts()

  res.status(200).json(posts)
}

async function getPostByIdController(req: Request, res: Response) {
  const id = parseInt(req.params.id)

  const post = await findPostById(id)

  res.status(200).json(post)
}

async function createPostController(req: Request, res: Response) {
  const { title, authorId, content, pageId } = req.body

  const post = await createPost({ title, authorId, content, pageId })

  res.status(200).json(post)
}

export {
  getAllPostsController,
  getPostByIdController,
  createPostController
}