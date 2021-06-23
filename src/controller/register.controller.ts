import { Request, Response } from 'express';
import { createUser } from '../service/user.service';
import { UserInterface } from '../interface/user.interface';

const registerController = async (req: Request, res: Response) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const salt = 'salt';
        createUser({ username, password, salt } as UserInterface);
        res.status(201).send(`{ "username": '${username}' }`);
    } catch (error) {
        res.status(500).send('{"error":"Error creating new user."}');
    }
};
export { registerController };
