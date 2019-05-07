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

export const mergeOut = (pleaseOpenModal:Function) => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/mergeout', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory,
				targetDirectory: getState().directoriesState.currentTargetDirectory
			})
			.then((response) => {
				if (response.status === 200) {
					dispatch({
						type: MergeDataActionType.UPDATE_MERGEDATA,
						mergeData: response.data
					});
					pleaseOpenModal()
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const updateMergeData=(index:number, value:string)=>{
	return (dispatch: Dispatch, getState: Function) => {
		let k = getState().mergeDataState;
		dispatch({
			type: MergeDataActionType.UPDATE_MERGEDATA,
			mergeData: [...k.slice(0,index),{...k[index],choice:value} , ...k.slice(index+1)]
		});
	};
}