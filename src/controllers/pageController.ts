import { Request, Response } from "express"
import { createPage, findAllPages, findPageById } from "../services/pageService"

async function getAllPagesController(req: Request, res: Response) {
  const pages = await findAllPages()

  res.status(200).json(pages)
}

async function getPageByIdController(req: Request, res: Response) {
  const id = parseInt(req.params.id)

  const page = await findPageById(id)

  res.status(200).json(page)
}

async function createPageController(req: Request, res: Response) {
  const { title, authorId, content } = req.body

  const page = await createPage({ title, authorId, content })

  res.status(200).json(page)
}

export {
  getAllPagesController,
  getPageByIdController,
  createPageController
}