import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomListListRelationFilter } from "../roomList/RoomListListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishListListRelationFilter } from "../wishList/WishListListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  roomLists?: RoomListListRelationFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  wishLists?: WishListListRelationFilter;
};
