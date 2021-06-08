import { Request, Response } from "express";
import { findByUsername } from "../service/user.service";

const loginController = async (req: Request, res: Response) => {
  res.status(200).send(req.body.username);
};
export{loginController}