import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Modal, Button, List, Popover } from '@material-ui/core';
import { IStoreStates } from '../statesManagement/Store';
import {connect} from 'react-redux'
import { commit, checkin, checkout } from "../statesManagement/manifestsState/ManifestsActions";
import { mergeIn, mergeOut } from "../statesManagement/mergeDataState/MergeDataActions";


const styles = (theme: any) => ({
  fab: {
    margin: theme.spacing.unit,
    positions: "relative",
    bottom: theme.spacing.unit,
    right: theme.spacing.unit * 5,

  },
  paper: {
    position: '-webkit-sticky' as '-webkit-sticky',
    width: theme.spacing.unit * 50,
    padding: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none' as 'none',
  },


});


class FloatingActionButtons extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = ({
      open: false,
      anchoreEl: null,
    });
  }


  handleClick = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <Fab color="secondary" aria-label="Add" className={classes.fab} onClick={this.handleClick}>
          <AddIcon />
        </Fab>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div>
            <List>
              <Button onClick = {this.props.commit}>Commit</Button>
              <Button onClick = {this.props.checkin}>CheckIn</Button>
              <Button onClick ={this.props.checkout}>CheckOut</Button>
              <Button onClick ={this.props.mergein}>MergeIn</Button>
              <Button onClick ={this.props.mergeout}>MergeOut</Button>
            </List>
          </div>

        </Popover>
      </div >
    );
  }
}

const mapStateToProps = (store: IStoreStates) => {
  return {
    manifestState: store.manifestsState,
    mergeDataState: store.mergeDataState,
  }
}


export default connect(mapStateToProps, {
  commit: commit,
  checkin: checkin,
  checkout: checkout,
  mergein: mergeIn,
  mergeout: mergeOut,

})(withStyles(styles)(FloatingActionButtons));
