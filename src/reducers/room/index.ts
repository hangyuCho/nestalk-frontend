import produce from 'immer';
import { RoomListData } from '@src/types/chatting';
import { chatRoomType, CHATTING_ROOM_LIST_SUBMIT } from '../loadingtype';
import { RoomList, CHATTING_LIST_REQUEST, CHATTING_LIST_SUCCESS, CHATTING_LIST_FAILURE } from './roomlist';

export interface ChatRoomInitialState {
  roomListInfo: RoomListData[] | null;
  //채팅방관련 정보 여기에 작성해 줍니다.
  isLoading: {
    id: number | null;
    name: chatRoomType | null;
  };
}

const initialState: ChatRoomInitialState = {
  roomListInfo: null,
  isLoading: {
    id: null,
    name: null,
  },
};

type ReducerAction = RoomList;

const chat = (state: ChatRoomInitialState = initialState, action: ReducerAction) => {
  return produce(state, (draft: ChatRoomInitialState) => {
    switch (action.type) {
      case CHATTING_LIST_REQUEST:
        draft.isLoading.name = CHATTING_ROOM_LIST_SUBMIT;
        break;
      case CHATTING_LIST_SUCCESS:
      case CHATTING_LIST_FAILURE:
        draft.isLoading.id = null;
        draft.isLoading.name = null;
        break;
    }
  });
};

export default chat;
