import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListCreateInput = {
  roomListing?: string | null;
  user: UserWhereUniqueInput;
};
