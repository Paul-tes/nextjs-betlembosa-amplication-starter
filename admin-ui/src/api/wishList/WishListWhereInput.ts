import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
