import { RoomListUpdateManyWithoutWishListsInput } from "./RoomListUpdateManyWithoutWishListsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListUpdateInput = {
  roomLists?: RoomListUpdateManyWithoutWishListsInput;
  user?: UserWhereUniqueInput;
};
