import { SortOrder } from "../../util/SortOrder";

export type RoomListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmeneties?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  roomCreatedById?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
