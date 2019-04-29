import thunk from "redux-thunk"
import { combineReducers, createStore, applyMiddleware, compose, Store } from "redux";

import { IManifestsState } from "./manifestsState/ManifestsTypes";
import { manifestsReducer } from "./manifestsState/ManifestsReducer";
import { mergeDataReducer } from "./mergeDataState/MergeDataReducer";
import { IMergeDataState } from "./mergeDataState/MergeDataTypes";

export interface IStoreStates {
    manifestsState: IManifestsState,
    mergeDataState: IMergeDataState

}

export const rootReducer = combineReducers<IStoreStates>({
    manifestsState: manifestsReducer,
    mergeDataState: mergeDataReducer
})

export const middleware = [
    thunk
]

const store: Store<IStoreStates, any> = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;














