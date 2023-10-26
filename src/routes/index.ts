import { Router } from "express"

import { loginUserController } from '../controllers/loginController'
import { createUserController, getAllUsersController, getUserByIdController } from "../controllers/userController"
import { createPageController, getAllPagesController, getPageByIdController } from "../controllers/pageController"
import { createPostController, getAllPostsController, getPostByIdController } from "../controllers/postController"
import { createPageToPostController, getAllPageToPostController, getPageToPostByIdController } from "../controllers/pagePostController"
import authenticateJWT from "../middleware/authenticateJWT"

const routes = Router()

routes.post('/login', loginUserController)

routes.get('/user', authenticateJWT, getAllUsersController)
routes.get('/user/:id', authenticateJWT, getUserByIdController)
routes.post('/user', authenticateJWT, createUserController)

routes.get('/page', authenticateJWT, getAllPagesController)
routes.get('/page/:id', authenticateJWT, getPageByIdController)
routes.post('/page', authenticateJWT, createPageController)

routes.get('/post', authenticateJWT, getAllPostsController)
routes.get('/post/:id', authenticateJWT, getPostByIdController)
routes.post('/post', authenticateJWT, createPostController)

routes.get('/pagePost', authenticateJWT, getAllPageToPostController)
routes.get('/pagePost/:id', authenticateJWT, getPageToPostByIdController)
routes.post('/pagePost', authenticateJWT, createPageToPostController)

export default routes