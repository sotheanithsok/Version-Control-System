import React, {  } from 'react'
import HeaderBar from './HeaderBar'
import ManiList from './ManiList'
import { getAllManifests, commit } from "../statesManagement/manifestsState/ManifestsActions";
import { IStoreStates } from "../statesManagement/Store";
import { connect } from "react-redux";




class Main extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);

    }


    render() {
        return (
            <div>
                <HeaderBar></HeaderBar>
                <ManiList/> 
                  
            </div>)
    }
}


const mapStatesToProp = (store: IStoreStates) => {
    return {
        manifests: store.manifestsState
    }
}

export default connect(mapStatesToProp, {
    getAllManifests: getAllManifests,
    commit: commit
})(Main)
