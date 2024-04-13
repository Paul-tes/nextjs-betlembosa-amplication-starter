import { RoomList } from "../roomList/RoomList";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  roomList?: RoomList | null;
  updatedAt: Date;
  user?: User;
};
