import React, { FunctionComponent } from 'react'
import TestButton from './TestButton';
import HeaderBar from './HeaderBar'
import ManiItem from './ManiItem'
import ManiList from './ManiList'
import { any } from 'prop-types';
import { getAllManifests, commit } from "../statesManagement/manifestsState/ManifestsActions";
import { IStoreStates } from "../statesManagement/Store";
import { connect } from "react-redux";


class Main extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
        this.state =
        {
            DirectoryField: '',
        };
        
    }
 

    inputField= (DirectoryField: any) => {
        this.setState({DirectoryField:DirectoryField})
    }

    render() {
        return (
            <div>
                <HeaderBar  getInputField = {this.inputField}></HeaderBar>
                <ManiList maniDirectory = {this.state.DirectoryField}></ManiList>

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
    commit:commit
})(Main)
