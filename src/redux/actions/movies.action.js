import { movies } from '../constants';

const setData = (data = {}) => {
  return { type: movies.SET_DATA, data };
};

export default {
  setData,
};
