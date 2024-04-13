import { WishList as TWishList } from "../api/wishList/WishList";

export const WISHLIST_TITLE_FIELD = "roomListing";

export const WishListTitle = (record: TWishList): string => {
  return record.roomListing?.toString() || String(record.id);
};
