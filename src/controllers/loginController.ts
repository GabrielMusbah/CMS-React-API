import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { findUserByEmail } from "../services/userService";

const JWT_SECRET = process.env.JWT_SECRET || ''

type User = {
  email: string;
  password: string;
};

export async function loginUserController(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await findUserByEmail(email)

  if (!user) return res.status(401).json({ message: 'Email not found' })

  if (user.password !== password) return res.status(401).json({ message: 'Password invalid...' })

  // Usuário é válido, emitir JWT.
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });

}