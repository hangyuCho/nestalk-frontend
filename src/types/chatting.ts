export type ChatType = 'individualChat' | 'groupChat';

export interface RoomListData {
  room_id: number;
  room_name: string;
  type: ChatType | string;
  participant: Array<number>;
  last_chat: string;
  not_read_chat: number;
  updatedAt: Date;
}
