import React, { FunctionComponent } from "react"
import { connect } from "react-redux";
import { getAllManifests, commit } from "../statesManagement/manifestsState/ManifestsActions";
import { Button } from "@material-ui/core";
import { IStoreStates } from "../statesManagement/Store";

const TestButton: FunctionComponent = (props: any) => {

    return (<div>
        <Button variant="contained" onClick={() => {
            props.commit("C:\\Users\\Sotheanith Sok\\Desktop\\Test");
        }}> BUTTON DOES SOMETHING</Button>
        <pre>{JSON.stringify(props.manifests, null, 2)}</pre>
    </div>)
}

const mapStatesToProp = (store: IStoreStates) => {
    return {
        manifests: store.manifestsState
    }
}

export default connect(mapStatesToProp, {
    getAllManifests: getAllManifests,
    commit:commit
})(TestButton)