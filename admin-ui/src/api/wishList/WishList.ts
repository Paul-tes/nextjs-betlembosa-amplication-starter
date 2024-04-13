import { User } from "../user/User";

export type WishList = {
  createdAt: Date;
  id: string;
  listing: string | null;
  updatedAt: Date;
  user?: User;
};
