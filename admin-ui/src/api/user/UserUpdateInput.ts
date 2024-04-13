import { InputJsonValue } from "../../types";
import { RoomListUpdateManyWithoutUsersInput } from "./RoomListUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  roomLists?: RoomListUpdateManyWithoutUsersInput;
  username?: string;
};
