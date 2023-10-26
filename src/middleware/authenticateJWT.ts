import { Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';
import { CustomRequest } from "../@types/custom";

const JWT_SECRET = process.env.JWT_SECRET || ''

export default function authenticateJWT(req: CustomRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user; // Armazena informações do usuário no objeto req para uso posterior
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
}
