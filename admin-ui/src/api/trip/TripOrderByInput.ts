import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roomListId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
