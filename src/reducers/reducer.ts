import { TYPES } from "./types";
import { setSerchItemsHelper } from "./helpers/helper";

import { AnyAction } from "redux";

const initialState = {
  repositories: [],
  searchResults: [],
};

export const repositoriesReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case TYPES.GET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    case TYPES.SET_SEARCH_STR:
      return {
        ...state,
        searchResults: action.payload,
      };
    case TYPES.SET_SINGL_SEARH:
      return {
        ...state,
        searchResults: setSerchItemsHelper(state.searchResults, action.payload),
      };
    default:
      return state;
  }
};
