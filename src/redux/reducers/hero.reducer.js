import { hero } from '../constants';

const initialState = {
  data: {},
  display: true,
  value: '',
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case hero.SET_HERO:
      return { ...state, data: action.data };
    case hero.DISPLAY_HERO:
      return { ...state, display: action.data };
    case hero.SEARCH_VALUE:
      return { ...state, value: action.data };

    default:
      return { ...state };
  }
};

export default data;
