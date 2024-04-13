import { InputJsonValue } from "../../types";
import { RoomListCreateNestedManyWithoutUsersInput } from "./RoomListCreateNestedManyWithoutUsersInput";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { WishListCreateNestedManyWithoutUsersInput } from "./WishListCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  roomLists?: RoomListCreateNestedManyWithoutUsersInput;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
  wishLists?: WishListCreateNestedManyWithoutUsersInput;
};
