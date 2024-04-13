import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListWhereInput = {
  id?: StringFilter;
  listing?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
