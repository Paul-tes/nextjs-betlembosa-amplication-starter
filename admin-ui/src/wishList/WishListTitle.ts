import { WishList as TWishList } from "../api/wishList/WishList";

export const WISHLIST_TITLE_FIELD = "listing";

export const WishListTitle = (record: TWishList): string => {
  return record.listing?.toString() || String(record.id);
};
