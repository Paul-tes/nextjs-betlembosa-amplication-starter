import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TripCreateNestedManyWithoutRoomListsInput } from "./TripCreateNestedManyWithoutRoomListsInput";
import { WishListWhereUniqueInput } from "../wishList/WishListWhereUniqueInput";

export type RoomListCreateInput = {
  description: string;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeAmeneties: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  price: number;
  roomCreatedBy: UserWhereUniqueInput;
  title: string;
  trips?: TripCreateNestedManyWithoutRoomListsInput;
  wishList?: WishListWhereUniqueInput | null;
};
