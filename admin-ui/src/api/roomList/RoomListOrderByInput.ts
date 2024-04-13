import { SortOrder } from "../../util/SortOrder";

export type RoomListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationType?: SortOrder;
  placeType?: SortOrder;
  updatedAt?: SortOrder;
};
