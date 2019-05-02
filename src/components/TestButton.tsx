import React, { FunctionComponent, useRef, createRef } from "react"
import { Button } from "@material-ui/core";
import MergeModal, { MergeModalHandle } from "./MergeModal";
import { IStoreStates } from "../statesManagement/Store";
import { connect } from "react-redux";
import { updateCurrentSourceDirectory } from "../statesManagement/directoriesState/DirectoriesActions";

const TestButton: FunctionComponent = (props: any) => {
    const mergeModalRef = useRef<any>(null);

    return (<div>
        <MergeModal innerRef={mergeModalRef} value={123}></MergeModal>
        <Button variant="contained" onClick={() => {
            if (mergeModalRef.current) {
                mergeModalRef.current.showModal();
            }
        }}> BUTTON DOES SOMETHING</Button>
        <Button onClick={() => {
            props.updateCurrentSourceDirectory("Hi");
        }}>Click me</Button>
        <pre>{JSON.stringify(props.directoriesState, null, 2)}</pre>

    </div>)
}

const mapStateToProps = (store: IStoreStates) => {
    return {
        directoriesState: store.directoriesState
    }
}

export default connect(mapStateToProps, {
    updateCurrentSourceDirectory: updateCurrentSourceDirectory
})(TestButton)