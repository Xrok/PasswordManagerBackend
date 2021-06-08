import { Document } from "mongoose";

interface AccountInterface extends Document {
  username: string;
  password: string;
  webPage: string;
  userId: string;
}

export { AccountInterface };
