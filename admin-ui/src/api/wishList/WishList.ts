import { RoomList } from "../roomList/RoomList";
import { User } from "../user/User";

export type WishList = {
  createdAt: Date;
  id: string;
  roomLists?: Array<RoomList>;
  updatedAt: Date;
  user?: User;
};
