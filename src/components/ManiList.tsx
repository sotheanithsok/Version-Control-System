import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import { IStoreStates } from '../statesManagement/Store';
import { connect } from 'react-redux';
import { updateLabel } from '../statesManagement/manifestsState/ManifestsActions';
import { Button, List, ListItemSecondaryAction, IconButton } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import spacing from '@material-ui/core/styles/spacing';
import CreateIcon from '@material-ui/icons/CreateRounded'

import TextField from '@material-ui/core/TextField';




const styles = (theme: any) => ({
    root: {
        width: '100%',
        maxWidth: 240,
        backgroundColor: theme.palette.background.paper
    },
    list: {
        width: spacing.unit * 75
    },
    fullList: {
        width: 'auto'
    },
    divStyle:
    {
        display: 'inline'
    },

});





class ManiList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            artifacts: [],
            right: false,
            openLabelDialog: false,
            anchorEl: null,
            newLabel: null,
            elementId: "",

        };
    }

    showArtifacts = () => {
        let artifacts = this.state.artifacts;
        return (
            <div className={this.props.classes.list}>
                <List>
                    {artifacts.map((element: any, index: any) => {
                        let splitElement = element.split('.psa');
                        return (
                            <div>
                                <ListItem key={this.hashCode(element)}>
                                    <ListItemIcon>{index % 2 === 0 ? <FolderIcon /> : <FolderIcon />}</ListItemIcon>
                                    <ListItemText primary={'..' + splitElement[1]} secondary={'Path: ' + element} />
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    })}
                </List>
            </div>
        );
    };




    handleCloseLabelDialog = () => {
        this.setState({ openLabelDialog: false });
    };

    handleOpenLabelDialog = () => {
        this.setState({ openLabelDialog: true });
    };




    render() {
        const manifests = this.props.manifestState;


        const { classes } = this.props;
        let manifestList = manifests.map((element: any) => {
            if (element.tag === null)
                return (


                    <ListItem
                        button
                        key={this.hashCode(element.id)}
                        onClick={() => {
                            this.setState({
                                artifacts: element.values !== undefined ? element.values : [],
                                right: true
                            });
                        }}

                    >

                        <ListItemText>
                            {element.id}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => {
                                this.setState(
                                    {
                                        elementId: element.id,
                                    }
                                );
                                this.handleOpenLabelDialog()
                            }
                            }
                            >
                                <CreateIcon />
                            </IconButton>
                        </ListItemSecondaryAction>

                    </ListItem>


                )
            else {
                let tagLength = element.tag.length;
                return (

                    <ListItem
                        button
                        key={this.hashCode(element.id)}
                        onClick={() => {
                            this.setState({
                                artifacts: element.values !== undefined ? element.values : [],
                                right: true
                            });
                        }}

                    >
                        <ListItemText>
                            {element.tag[tagLength-1]}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => {
                                this.setState(
                                    {
                                        elementId: element.id,
                                    }
                                );
                                this.handleOpenLabelDialog()
                            }
                            }
                            >
                                <CreateIcon />
                            </IconButton>
                        </ListItemSecondaryAction>

                    </ListItem>


                );
            }
        });

        return (
            <div>
                <List className={classes.root}>{manifestList}</List>
                <SwipeableDrawer
                    anchor="right"
                    open={this.state.right}
                    onClose={() => this.setState({ right: false })}
                    onOpen={() => this.setState({ right: true })}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => this.setState({ right: false })}
                        onKeyDown={() => this.setState({ right: true })}
                    >
                        {this.showArtifacts()}
                    </div>
                </SwipeableDrawer>
                <Dialog
                    open={this.state.openLabelDialog}
                    onClose={this.handleCloseLabelDialog}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent>
                        <DialogContentText>
                            <TextField
                                onChange={(event) => {
                                    this.setState({ newLabel: event.target.value });
                                }}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Enter New Label"
                                type="text"
                                fullWidth
                            >
                            </TextField>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseLabelDialog} color="secondary">
                            Cancel
						</Button>
                        <Button onClick={() => { this.props.updateLabel(this.state.elementId, this.state.newLabel); this.handleCloseLabelDialog() }} color="primary">
                            Rename
                        </Button>
                    </DialogActions>
                </Dialog>

            </div >
        );
    }

    hashCode(s: string) {
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            let character = s.charCodeAt(i);
            hash = (hash << 5) - hash + character;
            hash = hash & hash;
        }
        return hash;
    }
}

const mapStateToProps = (store: IStoreStates) => {
    return {
        manifestState: store.manifestsState
    };
};

export default connect(mapStateToProps, {
    updateLabel: updateLabel
})(withStyles(styles)(ManiList));


