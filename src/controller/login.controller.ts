import { Request, Response } from 'express';
import { findByUsername } from '../service/user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';


const loginController = async (req: Request, res: Response) => {
    const user = await findByUsername(req.body.username)
    if (!user) {
        res.status(400).json({error: 'Usuario no encontrado.'})
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })

    const token = jwt.sign({username:user.username},process.env.SECRET,{expiresIn:'1h'})

    res.status(200).json({token: token,username : req.body.username});
};
export { loginController };
