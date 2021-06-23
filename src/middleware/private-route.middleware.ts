import { NextFunction, Request, Response } from 'express';
import { findByUsername } from '../service/user.service';

const privateRouteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const user = await findByUsername(req.body.username);
    if (user && user.password == req.body.password) {
        next();
    } else {
        res.status(401).send('{"error":"Unauthorized."}');
    }
};

export { privateRouteMiddleware };
