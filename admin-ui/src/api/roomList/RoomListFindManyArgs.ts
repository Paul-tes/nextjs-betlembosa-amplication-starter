import { RoomListWhereInput } from "./RoomListWhereInput";
import { RoomListOrderByInput } from "./RoomListOrderByInput";

export type RoomListFindManyArgs = {
  where?: RoomListWhereInput;
  orderBy?: Array<RoomListOrderByInput>;
  skip?: number;
  take?: number;
};
