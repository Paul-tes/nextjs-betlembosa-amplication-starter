import { RoomList as TRoomList } from "../api/roomList/RoomList";

export const ROOMLIST_TITLE_FIELD = "title";

export const RoomListTitle = (record: TRoomList): string => {
  return record.title?.toString() || String(record.id);
};
