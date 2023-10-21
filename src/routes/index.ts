import { Router } from "express"
import { createUserController, getAllUsersController, getUserByIdController } from "../controllers/userController"
import { createPageController, getAllPagesController, getPageByIdController } from "../controllers/pageController"
import { createPostController, getAllPostsController, getPostByIdController } from "../controllers/postController"
import { createPageToPostController, getAllPageToPostController, getPageToPostByIdController } from "../controllers/pagePostController"

const routes = Router()

routes.get('/user', getAllUsersController)
routes.get('/user/:id', getUserByIdController)
routes.post('/user', createUserController)

routes.get('/page', getAllPagesController)
routes.get('/page/:id', getPageByIdController)
routes.post('/page', createPageController)

routes.get('/post', getAllPostsController)
routes.get('/post/:id', getPostByIdController)
routes.post('/post', createPostController)

routes.get('/pagePost', getAllPageToPostController)
routes.get('/pagePost/:id', getPageToPostByIdController)
routes.post('/pagePost', createPageToPostController)

export default routes