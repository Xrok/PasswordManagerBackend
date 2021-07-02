import { Request, Response } from 'express';
import { createUser, findByUsername } from '../service/user.service';
import { UserInterface } from '../interface/user.interface';
import * as bcrypt from 'bcrypt';

const registerController = async (req: Request, res: Response) => {
    try {
        const user = await findByUsername(req.body.username)
        if (user) {
            res.status(500).send({error:"Error usuario ya existe."});
            return
        }
        const username = req.body.username;
        const salt = await bcrypt.genSalt(10);

        const password = await bcrypt.hash(req.body.password, salt);

        createUser({ username, password, salt } as UserInterface);

        res.status(201).send({ username: username });
        
    } catch (error) {
        console.log(error)
        res.status(500).send({error:"Error creating new user."});
    }
};

export { registerController };
