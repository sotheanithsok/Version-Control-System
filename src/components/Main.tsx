import React, { FunctionComponent, useRef, createRef } from 'react'
import ReactDOM from 'react-dom';

import TestButton from './TestButton';
import HeaderBar from './HeaderBar'
import ManiItem from './ManiItem'
import ManiList from './ManiList'
import ArtifList from './ArtifList'
import AddButton from './AddButton';
import { any } from 'prop-types';
import { Button } from '@material-ui/core'
import MergeModal, { MergeModalHandle } from "./MergeModal";
import { getAllManifests, commit } from "../statesManagement/manifestsState/ManifestsActions";
//import {getAllArtifacts, comit } from "../statesManagement/artifactsState/ArtifactsActions"
import { IStoreStates } from "../statesManagement/Store";
import { connect } from "react-redux";

ReactDOM.render(<ArtifList />, document.querySelector('#root'));


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
                <ArtifList/> 
                <AddButton/>   
            </div>)
    }
}

const mapStatesToProp = (store: IStoreStates) => {
    return {
        manifests: store.manifestsState,
    }
}



export default connect(mapStatesToProp, {
    getAllManifests: getAllManifests,
    
    commit: commit
})(Main)
