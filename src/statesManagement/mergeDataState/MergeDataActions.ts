import { MergeDataActionType, IMergeDataState } from './MergeDataTypes';
import Axios from 'axios';
import { Dispatch } from 'redux';

const instance = Axios.create({
	baseURL: 'http://localhost:3001/',
	timeout: 10000
});
export const mergeIn = () => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/mergein', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory,
				targetDirectory: getState().directoriesState.currentTargetDirectory,
				mergeData: getState().mergeData
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

export const mergeOut = () => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/mergeout', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory,
				targetDirectory: getState().directoriesState.currentTargetDirectory
			})
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					console.log(response.data);
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
export const updateMergeData = (index: number, choice:string)=>{
	return (dispatch:Dispatch, getState:Function)=>{
		let k = [getState().mergeData]
		k[index].choice=choice
		dispatch({
			type: MergeDataActionType.UPDATE_MERGEDATA,
			mergeData: k
		});

		console.log(getState().mergeData)
	}
}
