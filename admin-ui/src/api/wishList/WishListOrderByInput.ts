import { SortOrder } from "../../util/SortOrder";

export type WishListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listing?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
