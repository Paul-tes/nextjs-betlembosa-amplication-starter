import { InputJsonValue } from "../../types";
import { RoomListCreateNestedManyWithoutUsersInput } from "./RoomListCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  roomLists?: RoomListCreateNestedManyWithoutUsersInput;
  username: string;
};
