import { Reducer } from "redux";
import { IManifestsState, IManifestAction, ManifestsActionType } from "./ManifestsTypes";

const intialManifestState: IManifestsState = [];

export const manifestsReducer: Reducer<IManifestsState, IManifestAction> = (state: IManifestsState = intialManifestState, action: IManifestAction) => {
    switch (action.type) {
        case ManifestsActionType.UPDATE_MANIFESTS:
            return action.manifests;
        default:
            return state;
    }
}