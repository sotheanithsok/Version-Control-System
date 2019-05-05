import { ManifestsActionType, IManifestUpdateAction } from './ManifestsTypes';
import { Dispatch } from 'redux';

import Axios from 'axios';
const instance = Axios.create({
	baseURL: 'http://localhost:3001/',
	timeout: 10000
});

export const getAllManifests = () => {
	return (dispatch: Dispatch<IManifestUpdateAction>, getState: Function) => {
		instance
			.post('/get/manifests', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory
			})
			.then((response) => {
				if (response.status === 200) {
					dispatch({
						type: ManifestsActionType.UPDATE_MANIFESTS,
						manifests: response.data
					});
				} else {
					dispatch({
						type: ManifestsActionType.UPDATE_MANIFESTS,
						manifests: getState()
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const commit = () => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/commit', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory
			})
			.then((response) => {
				if (response.status === 200) {
					getAllManifests()(dispatch, getState);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const checkin = () => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/checkin', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory,
				targetDirectory: getState().directoriesState.currentTargetDirectory
			})
			.then((response) => {
				if (response.status === 200) {
					getAllManifests()(dispatch, getState);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const checkout = () => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/checkout', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory,
				targetDirectory: getState().directoriesState.currentTargetDirectory
			})
			.then((response) => {
				if (response.status === 200) {
					getAllManifests()(dispatch, getState);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const updateLabel = (id: string, value: string | string[]) => {
	return (dispatch: Dispatch, getState: Function) => {
		instance
			.post('/update', {
				sourceDirectory: getState().directoriesState.currentSourceDirectory,
				id: id,
				field: 'tag',
				value: value
			})
			.then((response) => {
				if (response.status === 200) {
					getAllManifests()(dispatch, getState);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
