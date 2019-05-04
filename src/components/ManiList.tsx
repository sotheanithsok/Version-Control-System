import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { IStoreStates } from '../statesManagement/Store';
import { connect } from 'react-redux';
import { updateLabel } from '../statesManagement/manifestsState/ManifestsActions';

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FolderIcon from '@material-ui/icons/Folder';
import spacing from '@material-ui/core/styles/spacing';




const styles = (theme: { palette: { background: { paper: any; }; }; }) => ({
    root: {
        width: '100%',
        maxWidth: 240,
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        width: spacing.unit *75
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
                artifacts: []
            }
    }

    toggleDrawer = (side: any, open: any) => () => {
        this.setState({
            [side]: open
        });
    };

  


    render() {

        const manifests = this.props.manifestState

        const { classes } = this.props;
        let manifestList = manifests.map((element: any) => {

            if (element.tag === null)
                return (<ListItem button key={element.id} onClick={this.toggleDrawer("right", true)}>{element.id}</ListItem>)
            else
                return (<ListItem button key={element.id} onClick={this.toggleDrawer("right", true)}>{element.tag}</ListItem>)

        });

        const sideList = (
            <div className={classes.list}>
              <List>
                {this.props.manifestState.map
                  (
                    (element: any, index:any) =>
                      (
                        <ListItem button key={element.id}>
                          <ListItemIcon>
                            {index % 2 === 0 ? <FolderIcon /> : <FolderIcon />}
                          </ListItemIcon>
                          <ListItemText primary={element.values} />
                        </ListItem>
                      )
                  )
                },
                
              </List>
              <Divider />
              
            </div>
          );


        return (
            <div>
                <List className={classes.root} >
                    {manifestList}
                </List>
                <SwipeableDrawer 
                anchor="right"
                open={this.state.right}
                onClose={this.toggleDrawer("right", false)}
                onOpen={this.toggleDrawer("right", true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer("right", false)}
                        onKeyDown={this.toggleDrawer("right", false)}
                    >
                    {sideList}
                     </div>

        </SwipeableDrawer>
            </div>

        );
    }
}

const mapStateToProps = (store: IStoreStates) => {
    return {
        manifestState: store.manifestsState
    }
}

export default connect(mapStateToProps, {
    updateLabel: updateLabel,
})(withStyles(styles)(ManiList));