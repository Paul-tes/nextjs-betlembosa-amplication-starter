import { JsonValue } from "type-fest";
import { RoomList } from "../roomList/RoomList";
import { Trip } from "../trip/Trip";
import { WishList } from "../wishList/WishList";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  roomLists?: Array<RoomList>;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
  wishLists?: Array<WishList>;
};
