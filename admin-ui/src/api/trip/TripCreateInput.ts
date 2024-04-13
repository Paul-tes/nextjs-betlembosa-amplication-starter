import { RoomListWhereUniqueInput } from "../roomList/RoomListWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  roomList?: RoomListWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
