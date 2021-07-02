import { Request, Response } from 'express';
import { findAccountsByUserId } from '../service/account.service';
import { findByUsername } from '../service/user.service';

const fetchAccounts = async (req: Request, res: Response) => {
    try {
        const username = res.locals.user.username;
        const user = await findByUsername(username);
        const accounts = await findAccountsByUserId(user.id);
        res.status(200).send(accounts);
    } catch (error) {
        res.status(400).json({error:"Error leyendo sus cuentas."});
    }
};

export { fetchAccounts };
