import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListUpdateInput = {
  listing?: string | null;
  user?: UserWhereUniqueInput;
};
