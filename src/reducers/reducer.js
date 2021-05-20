import { TYPES } from "reducers/types";
import { setSerchItemsHelper } from "reducers/helpers/helper";

const initialState = {
  repositories: [],
  searchResults: [],
};

export const repositoriesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case TYPES.GET_REPOSITORIES:
      return {
        ...state,
        repositories: payload,
      };
    case TYPES.SET_SEARCH_STR:
      return {
        ...state,
        searchResults: payload,
      };
    case TYPES.SET_SINGL_SEARH:
      return {
        ...state,
        searchResults: setSerchItemsHelper(state.searchResults, payload),
      };
    default:
      return state;
  }
};
