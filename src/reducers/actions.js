import { TYPES } from "reducers/types";

export const repositoriesActions = {
  fillrepositories: (repositories) => ({
    type: TYPES.GET_REPOSITORIES,
    payload: repositories,
  }),
  setSearchArr: (items) => ({
    type: TYPES.SET_SEARCH_STR,
    payload: items,
  }),
  setSinglSearch: (value) => ({
    type: TYPES.SET_SINGL_SEARH,
    payload: value,
  }),
};
