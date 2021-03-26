import axios from 'axios';
import { takeLatest, put, call, delay } from 'redux-saga/effects';
import {
  CHATTING_LIST_REQUEST,
  CHATTING_LIST_SUCCESS,
  CHATTING_LIST_FAILURE,
  RoomListRequest,
  RoomListSuccess,
  RoomListFailure,
} from '@src/reducers/chat/roomList';
import { dumyRoomList } from '@src/reducers/chat';

// function roomListAPI(me_id: number) {
//   //return axios.post();
// }

function* roomList(action: RoomListRequest) {
  try {
    //const result = yield call(roomListAPI, action.data);
    yield delay(1000);
    yield put({ type: CHATTING_LIST_SUCCESS, data: dumyRoomList });
    //yield put(RoomListSuccess(result.data)) =>왜 안되는지 아시는분 ..
  } catch (e) {
    console.error(e);
    yield put({ type: CHATTING_LIST_FAILURE, error: e });
  }
}

function* watchRoomList() {
  yield takeLatest(CHATTING_LIST_REQUEST, roomList);
}

export default watchRoomList;
