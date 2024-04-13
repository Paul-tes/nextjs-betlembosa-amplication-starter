import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TripUpdateManyWithoutRoomListsInput } from "./TripUpdateManyWithoutRoomListsInput";
import { WishListWhereUniqueInput } from "../wishList/WishListWhereUniqueInput";

export type RoomListUpdateInput = {
  description?: string;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeAmeneties?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number;
  roomCreatedBy?: UserWhereUniqueInput;
  title?: string;
  trips?: TripUpdateManyWithoutRoomListsInput;
  wishList?: WishListWhereUniqueInput | null;
};
