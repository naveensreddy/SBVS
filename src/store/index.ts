import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { reducer } from "./reducers/reducer";

export const initialState: any = {};

export const store = createStore(reducer, initialState, devToolsEnhancer({}));
