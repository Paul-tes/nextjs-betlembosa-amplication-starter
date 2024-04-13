import { RoomListWhereUniqueInput } from "../roomList/RoomListWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  roomList?: RoomListWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
