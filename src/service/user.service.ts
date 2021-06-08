import { UserInterface } from "../interface/user.interface";
import { User } from "../models/user.model";

const findByUsername = async (_username: string): Promise<UserInterface> => {
  const query: UserInterface = await User.findOne({ username: _username });

  return query;
};

const createUser = async (_user: UserInterface) => {
  const newUser = new User(_user);
  await newUser.save();
};

export { findByUsername,createUser };
