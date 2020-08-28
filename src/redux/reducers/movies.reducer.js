import { movies } from '../constants';

const initialState = {};

export const hero = (state = initialState, action) => {
  switch (action.type) {
    case movies.SET_DATA:
      return { ...state, ...action.data };

    default:
      return { ...state };
  }
};

export default hero;
