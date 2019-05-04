import React from 'react';
import ManiItem from './ManiItem'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { IStoreStates } from '../statesManagement/Store';
import { connect } from 'react-redux';
import { getAllManifests } from '../statesManagement/manifestsState/ManifestsActions';

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FolderIcon from '@material-ui/icons/Folder';



const styles = (theme: { palette: { background: { paper: any; }; }; }) => ({
    root: {
        width: '100%',
        maxWidth: 240,
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    },
});


class ManiList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state =
            {
                side: null,
            }
    }

    toggleDrawer = (side: any, open: any) => () => {
        this.setState({
            [side]: open
        });
    };

    openArtList(even:any)
    {

    }



    render() {

        const manifests = this.props.manifestState
        const { classes } = this.props;

        let manifestList = manifests.map((element: any) => {
            if(element.tag ===null)
                return (<ListItem button >{element.id}</ListItem>)
            else
                return (<ListItem button >{element.tag}</ListItem>)
        });
        return (

            <List className={classes.root} >
                {manifestList}
            </List>

        );
    }
}

const mapStateToProps = (store: IStoreStates) => {
    return {
        manifestState: store.manifestsState
    }
}

export default connect(mapStateToProps, {
})(withStyles(styles)(ManiList));