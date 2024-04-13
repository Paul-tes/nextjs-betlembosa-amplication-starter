import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RoomListWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmeneties?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: FloatFilter;
  roomCreatedBy?: UserWhereUniqueInput;
  title?: StringFilter;
};
