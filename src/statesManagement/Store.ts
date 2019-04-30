import { IDirectoriesState } from './directoriesState/DirectoriesTypes';
import thunk from "redux-thunk"
import { combineReducers, createStore, applyMiddleware, compose, Store } from "redux";

import { IManifestsState } from "./manifestsState/ManifestsTypes";
import { manifestsReducer } from "./manifestsState/ManifestsReducer";
import { mergeDataReducer } from "./mergeDataState/MergeDataReducer";
import { IMergeDataState } from "./mergeDataState/MergeDataTypes";
import { directoriesReducer } from './directoriesState/DirectoriesReducer';

export interface IStoreStates {
    manifestsState: IManifestsState,
    mergeDataState: IMergeDataState,
    directoriesState: IDirectoriesState

}

export const rootReducer = combineReducers<IStoreStates>({
    manifestsState: manifestsReducer,
    mergeDataState: mergeDataReducer,
    directoriesState: directoriesReducer
})

export const middleware = [
    thunk
]

const store: Store<IStoreStates, any> = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
)

export default store;














