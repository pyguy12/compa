import LoveCalulatorService from "@/services/LoveCalculatorService.js";

export const namespaced = true;

export const state = {
  name1: "",
  name2: "",
  isSpecial: false,
  compatabilityPercentage: 0,
  isLoading: false,
};

export const mutations = {
  SET_NAME_1(state, name) {
    state.name1 = name;
  },
  SET_NAME_2(state, name) {
    state.name2 = name;
  },
  TOGGLE_SPECIAL(state) {
    state.isSpecial = !state.isSpecial;
  },
  TOGGLE_LOADING(state) {
    state.isLoading = !state.isLoading;
  },
  SET_PERCENTAGE(state, percentage) {
    state.compatabilityPercentage = percentage;
  },
};

export const actions = {
  calculateLove({ commit }, { name1, name2 }) {
    commit("SET_NAME_1", name1);
    commit("SET_NAME_2", name2);

    return LoveCalulatorService.calculateCompatibility(name1, name2)
      .then((response) => {
        commit("SET_PERCENTAGE", response.data.percentage);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
