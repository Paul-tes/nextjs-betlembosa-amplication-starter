import { User } from "../user/User";

export type WishList = {
  createdAt: Date;
  id: string;
  roomListing: string | null;
  updatedAt: Date;
  user?: User;
};
