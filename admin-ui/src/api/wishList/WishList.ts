import { User } from "../user/User";

export type WishList = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
