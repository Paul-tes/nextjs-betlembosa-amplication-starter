import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { WishList } from "../wishList/WishList";

export type RoomList = {
  createdAt: Date;
  description: string;
  id: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  roomCreatedBy?: User;
  title: string;
  updatedAt: Date;
  wishList?: WishList | null;
};
