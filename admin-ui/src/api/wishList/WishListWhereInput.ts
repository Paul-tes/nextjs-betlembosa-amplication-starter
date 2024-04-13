import { StringFilter } from "../../util/StringFilter";
import { RoomListListRelationFilter } from "../roomList/RoomListListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListWhereInput = {
  id?: StringFilter;
  roomLists?: RoomListListRelationFilter;
  user?: UserWhereUniqueInput;
};
