import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomListListRelationFilter } from "../roomList/RoomListListRelationFilter";
import { WishListListRelationFilter } from "../wishList/WishListListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  roomLists?: RoomListListRelationFilter;
  username?: StringFilter;
  wishLists?: WishListListRelationFilter;
};
