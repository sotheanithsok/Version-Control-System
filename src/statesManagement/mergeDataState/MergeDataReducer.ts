import { Reducer } from "redux";
import { IMergeDataState, IMergeDataActions, IMergeDataActionType } from "./MergeDataTypes";

const initialMergeData: IMergeDataState = []


export const mergeDataReducer: Reducer<IMergeDataState, IMergeDataActions> = (state: IMergeDataState = initialMergeData, action: IMergeDataActions) => {
    switch (action.type) {
        case IMergeDataActionType.MERGE_IN:
            return state;
        case IMergeDataActionType.MERGE_OUT:
            return state;
        default:
            return state;
    }
}