import { IDirectoriesState, IDirectoriesActions, DirectoriesActionType } from './DirectoriesTypes';
import { Reducer } from 'redux';

const initialDirectoriesState: IDirectoriesState = {
	currentSourceDirectory: '',
	pastSourceDirectories: [],
	currentTargetDirectory: '',
	pastTargetDirectories: []
};

export const directoriesReducer: Reducer<IDirectoriesState, IDirectoriesActions> = (
	directoriesState: IDirectoriesState = initialDirectoriesState,
	action: IDirectoriesActions
) => {
	switch (action.type) {
		case DirectoriesActionType.UPDATE_CURRENT_SOURCE_DIRECTORY:
			return { ...directoriesState, ...action.payload };
		case DirectoriesActionType.UPDATE_CURRENT_TARGET_DIRECTORY:
			return { ...directoriesState, ...action.payload };
		default:
			return directoriesState;
	}
};
