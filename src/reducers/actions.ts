import { TYPES } from "./types";

export const repositoriesActions = {
  fillrepositories: (repositories: string[]) => ({
    type: TYPES.GET_REPOSITORIES,
    payload: repositories,
  }),
  setSearchArr: (items: string[]) => ({
    type: TYPES.SET_SEARCH_STR,
    payload: items,
  }),
  setSinglSearch: (value: string) => ({
    type: TYPES.SET_SINGL_SEARH,
    payload: value,
  }),
};
