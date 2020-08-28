import { hero } from '../constants';

const initialState = {
  data: {},
  display: true,
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case hero.SET_HERO:
      return { ...state, data: action.data };
    case hero.DISPLAY_HERO:
      return { ...state, display: action.data };

    default:
      return { ...state };
  }
};

export default data;
