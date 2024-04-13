import { RoomListCreateNestedManyWithoutWishListsInput } from "./RoomListCreateNestedManyWithoutWishListsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListCreateInput = {
  roomLists?: RoomListCreateNestedManyWithoutWishListsInput;
  user: UserWhereUniqueInput;
};
