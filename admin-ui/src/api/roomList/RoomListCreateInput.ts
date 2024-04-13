import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
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
  wishList?: WishListWhereUniqueInput | null;
};
