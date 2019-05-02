import React from 'react';
import ManiItem from './ManiItem'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { IStoreStates } from '../statesManagement/Store';
import { connect } from 'react-redux';
import { getAllManifests } from '../statesManagement/manifestsState/ManifestsActions';



const styles = (theme: { palette: { background: { paper: any; }; }; }) => ({
    root: {
        width: '100%',
        maxWidth: 240,
        backgroundColor: theme.palette.background.paper,
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

    

    render() {
   
     
        const { classes } = this.props;

    
        return (
            <List className={classes.root}>
                
            </List>

        );
    }
}



export default (withStyles(styles)(ManiList));