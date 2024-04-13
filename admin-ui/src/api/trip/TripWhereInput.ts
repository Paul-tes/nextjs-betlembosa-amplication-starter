import { StringFilter } from "../../util/StringFilter";
import { RoomListWhereUniqueInput } from "../roomList/RoomListWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripWhereInput = {
  id?: StringFilter;
  roomList?: RoomListWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
