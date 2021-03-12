import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user, { UserInitialState } from './user';

export interface RootState {
  user: UserInitialState;
}

//생성된 reducer Input
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({ user });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
