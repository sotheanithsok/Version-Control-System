import { MergeDataActionType, IMergeDataState } from './MergeDataTypes';
import Axios from 'axios';
import { Dispatch } from 'redux';

const instance = Axios.create({
	baseURL: 'http://localhost:3001/',
	timeout: 10000
});
export const mergeIn = (sourceDirectory: string, targetDirectory: string, mergeData: IMergeDataState) => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/mergein', {
				sourceDirectory: sourceDirectory,
				targetDirectory: targetDirectory,
				mergeData: mergeData
			})
			.then((response) => {
				if (response.status === 200) {
					dispatch({
						type: MergeDataActionType.UPDATE_MERGEDATA,
						mergeData: []
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const mergeOut = (sourceDirectory: string, targetDirectory: string) => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/mergeout', {
				sourceDirectory: sourceDirectory,
				targetDirectory: targetDirectory
			})
			.then((response) => {
				if (response.status === 200) {
					dispatch({
						type: MergeDataActionType.UPDATE_MERGEDATA,
						mergeData: response.data
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
