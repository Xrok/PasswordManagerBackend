import { Request, Response } from 'express';
import { AccountInterface } from '../interface/account.interface';
import { createAccount } from '../service/account.service';
import { findByUsername } from '../service/user.service';
import * as jwt from 'jsonwebtoken';

const addAccountController = async (req: Request, res: Response) => {
    try {
        const username = res.locals.user.username
        const accUsername = req.body.accUsername;
        const accPassword = req.body.accPassword;
        const webPage = req.body.webPage;
        const user = await findByUsername(username);
        await createAccount({
            userId: user.id,
            username: accUsername,
            password: accPassword,
            webPage,
        } as AccountInterface);
        res.status(201).send({username});
    } catch (error) {
        console.log(error)
        res.status(400).send({error:"Error creando su cuenta."});
    }
};

export { addAccountController };
