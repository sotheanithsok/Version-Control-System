

export interface IMergeData {
    mergeType: string,
    source: string | null,
    target: string | null,
    choice: "Target" | "Source"
}
export type IMergeDataState = IMergeData[]

export enum MergeDataActionType {
    UPDATE_MERGEDATA = "UPDATE_MERGEDATA"
}

export interface IUpdateMergeDataAction {
    type: MergeDataActionType.UPDATE_MERGEDATA,
    mergeData: IMergeDataState
}

export type IMergeDataActions = IUpdateMergeDataAction