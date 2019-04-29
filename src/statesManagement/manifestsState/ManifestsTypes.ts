export type IManifest = ICommitManifest | ICheckInManifest | ICheckOutManifest

export interface ICommitManifest {
    id: string,
    argument: string,
    author: string,
    description: string,
    tag: string[],
    values: string[],
    created: number,
    lastUpdated: number,
    command: string
}
export interface ICheckInManifest {
    id: string,
    argument: {
        source: string,
        target: string
    },
    author: string,
    description: string,
    tag: string[],
    created: number,
    lastUpdated: number,
    command: string
}

export type ICheckOutManifest = ICheckInManifest



export type IManifestsState = IManifest[]

export enum ManifestsActionType {
    UPDATE_MANIFESTS="UPDATE_MANIFESTS"
}


export interface IManifestUpdateAction {
    type: ManifestsActionType.UPDATE_MANIFESTS,
    manifests: IManifest[]
}


export type IManifestAction = IManifestUpdateAction  
