import { combineReducers } from "redux";
import { repositoriesReducer as repositories } from "reducers/reducer";

export const rootReducer = combineReducers({ repositories });
