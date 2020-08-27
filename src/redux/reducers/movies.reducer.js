import { movies } from '../constants';

const initialState = {};

export const setData = (state = initialState, action) => {
  switch (action.type) {
    case movies.SET_setDaTA:
      return { ...state, ...action.data };

    default:
      return { ...state };
  }
};

export default setData;
