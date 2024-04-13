import { SortOrder } from "../../util/SortOrder";

export type WishListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  roomListing?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
