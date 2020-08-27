import { movies } from '../constants';

const initialState = {};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case movies.SET_DATA:
      return { ...state, ...action.data };

    default:
      return { ...state };
  }
};

export default data;
