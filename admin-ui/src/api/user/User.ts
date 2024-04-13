import { JsonValue } from "type-fest";
import { RoomList } from "../roomList/RoomList";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  roomLists?: Array<RoomList>;
  updatedAt: Date;
  username: string;
};
