import { Request, Response } from "express";
import { AccountInterface } from "../interface/account.interface";
import { createAccount } from "../service/account.service";
import { findByUsername } from "../service/user.service";

const addAccountController = async (req: Request, res: Response) => {
  try {
    const username = req.body.username;
    //const password = req.body.password;
    const accUsername = req.body.accUsername;
    const accPassword = req.body.accPassword;
    const webPage = req.body.webPage;
    const user = await findByUsername(req.body.username);
    await createAccount({
      userId: user.id,
      username:accUsername,
      password:accPassword,
      webPage,
    } as AccountInterface);
    res.status(201).send("Success");
  } catch (error) {
    res.status(400).send("Error creando su cuenta");
  }
};

export { addAccountController };
