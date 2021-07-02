import { Request, Response } from 'express';
import { deleteAccountByUserIdUsernamaAndWebPage } from '../service/account.service';
import { findByUsername } from '../service/user.service';

const deleteAccountController = async (req: Request, res: Response) => {
    try {
        const username = res.locals.user.username
        const accUsername = req.body.accUsername;
        const webPage = req.body.webPage;
        const user = await findByUsername(username);
        await deleteAccountByUserIdUsernamaAndWebPage(user.id, accUsername, webPage);
        res.status(200).send({username});
    } catch (error) {
        res.status(400).send('{"error":"Error eliminando cuenta."}');
    }
};

export { deleteAccountController };
