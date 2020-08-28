import { filter } from '../constants';

const setFilter = (data) => {
  return { type: filter.SET_FILTER, data };
};

export default {
  setFilter,
};
