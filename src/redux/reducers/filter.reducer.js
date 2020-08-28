import { filter } from '../constants';

const initialState = {
  value: 0,
};

export const setFilter = (state = initialState, action) => {
  switch (action.type) {
    case filter.SET_FILTER:
      return { ...state, value: action.data };

    default:
      return { ...state };
  }
};

export default setFilter;
