import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type RoomList = {
  createdAt: Date;
  id: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  roomCreatedBy?: User;
  title: string;
  updatedAt: Date;
};
