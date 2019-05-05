import { Reducer } from 'redux';
import { IMergeDataState, IMergeDataActions, MergeDataActionType } from './MergeDataTypes';

const initialMergeData: IMergeDataState = [];

export const mergeDataReducer: Reducer<IMergeDataState, IMergeDataActions> = (
	state: IMergeDataState = initialMergeData,
	action: IMergeDataActions
) => {
	switch (action.type) {
		case MergeDataActionType.UPDATE_MERGEDATA:
			return action.mergeData;
		default:
			return state;
	}
};
