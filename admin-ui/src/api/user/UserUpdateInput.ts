import { InputJsonValue } from "../../types";
import { RoomListUpdateManyWithoutUsersInput } from "./RoomListUpdateManyWithoutUsersInput";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WishListUpdateManyWithoutUsersInput } from "./WishListUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  roomLists?: RoomListUpdateManyWithoutUsersInput;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
  wishLists?: WishListUpdateManyWithoutUsersInput;
};
