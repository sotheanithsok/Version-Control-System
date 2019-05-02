import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = (theme: { spacing: { unit: any; }; }) => ({
    fab: {
      margin: theme.spacing.unit,
      positions: "fixed",
      bottom: theme.spacing.unit * 15,
      right: theme.spacing.unit * -120
    }
    
});

function FloatingActionButtons(props:any) {
  const { classes } = props;
  return (
    <div>
      <Fab color ="secondary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
}

FloatingActionButtons.propTypes = {classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
