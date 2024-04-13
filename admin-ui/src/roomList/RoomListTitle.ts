import { RoomList as TRoomList } from "../api/roomList/RoomList";

export const ROOMLIST_TITLE_FIELD = "locationType";

export const RoomListTitle = (record: TRoomList): string => {
  return record.locationType?.toString() || String(record.id);
};
