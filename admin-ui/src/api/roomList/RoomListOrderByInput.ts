import { SortOrder } from "../../util/SortOrder";

export type RoomListOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmeneties?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  price?: SortOrder;
  roomCreatedById?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  wishListId?: SortOrder;
};
