import { MergeDataActionType, IMergeDataState } from './MergeDataTypes';
import Axios from 'axios';
import { Dispatch } from 'redux';
import { getAllManifests } from '../manifestsState/ManifestsActions';

const instance = Axios.create({
	baseURL: 'http://localhost:3000/',
	timeout: 10000
});
export const mergeIn = () => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/mergein', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory,
				targetDirectory: getState().directoriesState.currentTargetDirectory,
				mergeData: getState().mergeDataState
			})
			.then((response) => {
				if (response.status === 200) {
					dispatch({
						type: MergeDataActionType.UPDATE_MERGEDATA,
						mergeData: []
					});
					getAllManifests()(dispatch,getState);
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


export const clearMergeData = () => {
	return (dispatch: Dispatch, getState: Function) => {
		dispatch({
			type: MergeDataActionType.UPDATE_MERGEDATA,
			mergeData: []
		});
	};
};
