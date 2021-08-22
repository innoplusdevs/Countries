import { types } from "../../types/types";

export const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case types.all:
      return {
        url: types.all,
      };

    case types.name:
      return {
        url: types.name + action.name,
      };

    case types.region:
      return {
        url: types.region + action.region,
      };

    default:
      return {
        url: types.all,
      };
  }
};
