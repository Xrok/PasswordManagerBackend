import { NextFunction, Request, Response } from 'express';
import { findByUsername } from '../service/user.service';
import * as jwt from 'jsonwebtoken';


const privateRouteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const token = req.header('Authorization')
    if(!token) return res.status(401).json({error:'No autorizado.'})

    try {
    const verify = jwt.verify(token,process.env.SECRET)
    res.locals.user = verify
    next()
    } catch (error) {
        res.status(401).json({error:"No autorizado."});    
    }


};

export { privateRouteMiddleware };
