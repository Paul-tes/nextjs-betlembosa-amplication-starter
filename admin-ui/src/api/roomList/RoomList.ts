import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Trip } from "../trip/Trip";
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
  trips?: Array<Trip>;
  updatedAt: Date;
  wishList?: WishList | null;
};
