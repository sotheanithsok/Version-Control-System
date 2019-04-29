

export interface IMergeData {
    mergeType: string,
    source: string | null,
    target: string | null,
    choice: "Target" | "Source"
}
export type IMergeDataState = IMergeData[]

export enum IMergeDataActionType {
    MERGE_IN = "MERGE_IN",
    MERGE_OUT = "MERGE_OUT"
}
export interface IMergeInAction {
    type: IMergeDataActionType.MERGE_IN,
    mergeData: IMergeDataState
}
export interface IMergeOutAction {
    type: IMergeDataActionType.MERGE_OUT,
    mergeData: IMergeDataState
}

export type IMergeDataActions = IMergeInAction|IMergeOutAction