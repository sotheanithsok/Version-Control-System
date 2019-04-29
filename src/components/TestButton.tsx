import React, { FunctionComponent, useRef, createRef } from "react"
import { Button } from "@material-ui/core";
import MergeModal, { MergeModalHandle } from "./MergeModal";

const TestButton: FunctionComponent = (props: any) => {
    const mergeModalRef = useRef<any>(null);

    return (<div>
        <MergeModal innerRef={mergeModalRef} value={123}></MergeModal>
        <Button variant="contained" onClick={() => {
            if (mergeModalRef.current) {
                mergeModalRef.current.showModal();
            }
        }}> BUTTON DOES SOMETHING</Button>

    </div>)
}


export default TestButton