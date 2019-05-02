import { Dispatch } from "redux";
import { IDirectoriesState, DirectoriesActionType } from "./DirectoriesTypes";
import { getAllManifests } from "../manifestsState/ManifestsActions";

export const updateCurrentSourceDirectory = (newSourceDirectory: string) => {
    return (dispatch: Dispatch, getState: Function) => {
        let directoriesState: IDirectoriesState = getState().directoriesState;
        if (newSourceDirectory.length > 0) {

            dispatch({
                type: DirectoriesActionType.UPDATE_CURRENT_SOURCE_DIRECTORY,
                payload: {
                    currentSourceDirectory: newSourceDirectory,
                    pastSourceDirectories: [...directoriesState.pastSourceDirectories, directoriesState.currentSourceDirectory].filter((value, index, arr) => {
                        if (value.length > 0 && arr.indexOf(value) === index) {
                            return value;
                        }
                    })
                }
            })
         
            getAllManifests()(dispatch, getState);
        }


    }
}

export const updateCurrentTargetDirectory = (newTargetDirectory: string) => {
    return (dispatch: Dispatch, getState: Function) => {
        let directoriesState: IDirectoriesState = getState().directoriesState;
        dispatch({
            type: DirectoriesActionType.UPDATE_CURRENT_TARGET_DIRECTORY,
            payload: {
                currentTargetDirectory: newTargetDirectory,
                pastTargetDirectories: [...directoriesState.pastTargetDirectories, directoriesState.currentTargetDirectory].filter((value, index, arr) => {
                    if (value.length > 0 && arr.indexOf(value) === index) {
                        return value;
                    }
                })
            }
        })
    }
}