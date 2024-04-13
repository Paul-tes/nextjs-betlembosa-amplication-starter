import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListCreateInput = {
  listing?: string | null;
  user: UserWhereUniqueInput;
};
