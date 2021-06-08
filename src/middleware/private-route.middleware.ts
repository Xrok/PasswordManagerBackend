import { NextFunction, Request, Response } from "express";
import { findByUsername } from "../service/user.service";

const privateRouteMiddleware = async(req: Request, res: Response, next: NextFunction) => {

  const user = await findByUsername(req.body.username)
    if (user.password == req.body.password) {
        next()
    }else{
        res.status(401).send('Unauthorized.')
    }
};

export {privateRouteMiddleware}