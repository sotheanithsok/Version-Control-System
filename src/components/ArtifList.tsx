import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from '@material-ui/icons/Folder';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class SwipeableTemporaryDrawer extends React.Component<any, any> {
  state = {
    //top: false,
    //left: false,
    //bottom: false,
    right: false
  };

  toggleDrawer = (side:any, open: any) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {

    const {classes} = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {["Artifact1", "Artifact2", "Artifact3", "Artifact4"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <FolderIcon /> : <FolderIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("right", true)}>Manifest1</Button>
        <Button onClick={this.toggleDrawer("right", true)}>Manifest2</Button>
        <Button onClick={this.toggleDrawer("right", true)}>Manifest3</Button>
        <Button onClick={this.toggleDrawer("right", true)}>Manifest4</Button>
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



export default withStyles(styles)(SwipeableTemporaryDrawer);
