import { applyMiddleware, compose } from "redux";

const devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnchancers = devtools ? devtools : compose;

const middleware: any = [];

const enhancedStore = composeEnchancers(applyMiddleware(...middleware));

export { enhancedStore };
