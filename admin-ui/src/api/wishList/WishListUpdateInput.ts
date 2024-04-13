import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListUpdateInput = {
  roomListing?: string | null;
  user?: UserWhereUniqueInput;
};
