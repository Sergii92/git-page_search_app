import { createStore } from "redux";
import { enhancedStore } from "core/middleware/core";
import { rootReducer } from "core/rootReducer";

export const store = createStore(rootReducer, enhancedStore);
