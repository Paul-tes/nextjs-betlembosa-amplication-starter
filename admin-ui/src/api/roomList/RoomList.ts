import { JsonValue } from "type-fest";
import { User } from "../user/User";

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
};
