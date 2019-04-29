export interface IDirectoriesState {
    currentSourceDirectory: string,
    currentTargetDirectory: string,
    pastSourceDirectories: string[],
    pastTargetDirectories: string[]
}


export enum DirectoriesActionType {
    UPDATE_CURRENT_SOURCE_DIRECTORY = "UPDATE_CURRENT_SOURCE_DIRECTORY",
    UPDATE_CURRENT_TARGET_DIRECTORY = "UPDATE_CURRENT_TARGET_DIRECTORY"
}

export interface IUpdateCurrentSourceDirectoryAction {
    type: DirectoriesActionType.UPDATE_CURRENT_SOURCE_DIRECTORY;
    payload: IDirectoriesState
}

export interface IUpdateCurrentTargetDirectoryAction {
    type: DirectoriesActionType.UPDATE_CURRENT_SOURCE_DIRECTORY;
    payload: IDirectoriesState
}