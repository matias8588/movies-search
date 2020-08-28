import { hero } from '../constants';

const setHero = (data = {}) => {
  return { type: hero.SET_HERO, data };
};

const displayHero = (data) => {
  return { type: hero.DISPLAY_HERO, data };
};
export default {
  setHero,
  displayHero,
};
