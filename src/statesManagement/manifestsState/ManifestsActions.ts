
import { ManifestsActionType, IManifestUpdateAction } from './ManifestsTypes';
import { Dispatch } from "redux";

import Axios from 'axios';
const instance = Axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 10000
})


export const getAllManifests = (sourceDirectory: string) => {
    return (dispatch: Dispatch<IManifestUpdateAction>, getState: Function) => {
        instance.post('/get/manifests', {
            sourceDirectory: sourceDirectory
        }).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: ManifestsActionType.UPDATE_MANIFESTS,
                    manifests: response.data
                })
            } else {
                dispatch({
                    type: ManifestsActionType.UPDATE_MANIFESTS,
                    manifests: getState()
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const commit = (sourceDirectory: string) => {
    return (dispatch: Dispatch, getState: Function) => {
        instance.post('/commit', {
            sourceDirectory: sourceDirectory
        }).then(response => {
            if (response.status === 200) {
                getAllManifests(sourceDirectory)(dispatch, getState);
            }
        }).catch(err => {
            console.log(err);
        })

    }
}

export const checkin = (sourceDirectory: string, targetDirectory: string) => {
    return (dispatch: Dispatch, getState: Function) => {
        instance.post('/checkin', {
            sourceDirectory: sourceDirectory,
            targetDirectory: targetDirectory
        }).then(response => {
            if (response.status === 200) {
                getAllManifests(sourceDirectory)(dispatch, getState);
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const checkout = (sourceDirectory: string, targetDirectory: string) => {
    return (dispatch: Dispatch, getState: Function) => {
        instance.post('/checkout', {
            sourceDirectory: sourceDirectory,
            targetDirectory: targetDirectory
        }).then(response => {
            if (response.status === 200) {
                getAllManifests(sourceDirectory)(dispatch, getState);
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const updateLabel = (sourceDirectory: string, id: string, value: string | string[]) => {
    return (dispatch: Dispatch, getState: Function) => {
        instance.post('/update', {
            sourceDirectory: sourceDirectory,
            id: id,
            field: "tag",
            value: value
        }).then(response => {
            if (response.status === 200) {
                getAllManifests(sourceDirectory)(dispatch, getState);
            }
        }).catch(err => {
            console.log(err)
        })
    }
}