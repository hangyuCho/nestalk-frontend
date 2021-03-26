import { RoomListData } from '@src/types/chatting';

//CHATROOM request reducer
export const CHATTING_LIST_REQUEST = 'CHATTING_LIST_REQUEST' as const;
export const CHATTING_LIST_SUCCESS = 'CHATTING_LIST_SUCCESS' as const;
export const CHATTING_LIST_FAILURE = 'CHATTING_LIST_FAILURE' as const;

export interface RoomListRequest {
  type: typeof CHATTING_LIST_REQUEST;
  data: string;
}

export interface RoomListSuccess {
  type: typeof CHATTING_LIST_SUCCESS;
  data: RoomListData;
}

export interface RoomListFailure {
  type: typeof CHATTING_LIST_FAILURE;
  error: string;
}

//roomListRequest
export const roomListRequest = (data: string) => ({
  type: CHATTING_LIST_REQUEST,
  data,
});

//roomListSuccess
export const roomListSuccess = (data: RoomListData) => ({
  type: CHATTING_LIST_SUCCESS,
  data,
});

//roomListFailure
export const roomListFailure = (error: string) => ({
  type: CHATTING_LIST_FAILURE,
  error,
});

//RomeList type
export type RoomList = RoomListRequest | RoomListSuccess | RoomListFailure;
