import { Account } from "../models/account.model";
import { AccountInterface } from "../interface/account.interface";

const findAccountsByUserId = async (
  _userId: string
): Promise<AccountInterface[]> => {
  const query = await Account.find({ userId: _userId });
  return query;
};
const createAccount = async (_account: AccountInterface) => {
  const newAccount = new Account(_account);
  await newAccount.save();
};
const deleteAccountByUserIdUsernamaAndWebPage = async (
  _userId: string,
  _username: string,
  _webPage: string
) => {
  const account = await Account.deleteOne({
    userId: _userId,
    username: _username,
    webPage: _webPage,
  });

};

export { findAccountsByUserId, createAccount,deleteAccountByUserIdUsernamaAndWebPage };
