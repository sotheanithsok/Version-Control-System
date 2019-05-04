import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import spacing from '@material-ui/core/styles/spacing';
import transitions from '@material-ui/core/styles/transitions';
import shape from '@material-ui/core/styles/shape';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { IStoreStates } from "../statesManagement/Store";
import { connect } from "react-redux";
import { updateCurrentSourceDirectory } from "../statesManagement/directoriesState/DirectoriesActions";
import AddButton from './AddButton';
import { commit, checkin } from '../statesManagement/manifestsState/ManifestsActions';




const root = {
    flexGrow: 1,
};
const inputInput = {
    paddingTop: spacing.unit,
    paddingRight: spacing.unit,
    paddingBottom: spacing.unit,
    paddingLeft: spacing.unit * 7,
    transition: transitions.create('width'),
    width: spacing.unit * 50,
};
const search = {
    position: 'relative' as 'relative',
    borderRadius: shape.borderRadius,
    marginRight: spacing.unit * 2,
    marginLeft: spacing.unit * 20,
    width: spacing.unit * 59,
    backgroundColor: fade('#ffffff', 0.15),

};
const searchIcon = {
    width: spacing.unit * 9,
    height: '100%',
    position: 'absolute' as 'absolute',
    pointerEvents: 'none' as 'none',
    display: 'flex' as 'flex',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
};

const button =
{
    paddingTop: spacing.unit * 2,
    marginLeft: spacing.unit * 5,
};

class HeaderBar extends React.Component<any, any>{


    constructor(props: any) {
        super(props);

        this.state =
            {
                textField: "",
            };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.setState({
            textField: event.target.value,
        })
    }

    handleKeyDown(event: React.KeyboardEvent<any>) {
        if (event.keyCode === 13) {
            this.props.updateCurrentSourceDirectory(this.state.textField);

        }
    }


    render() {
        return (
            <div style={root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <div>
                            <Typography variant="h6" color="inherit" noWrap>
                                Version Control System
                     </Typography>
                        </div>
                        <div style={search}>
                            <div style={searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={this.state.placeHolder}
                                style={inputInput}
                                onChange={event => { this.handleChange(event) }}
                                onKeyDown={event => { this.handleKeyDown(event) }}
                            />
                        </div>

                        <div style = {button}>
                            <AddButton />
                        </div>
                    </Toolbar>


                </AppBar>


            </div>
        );

    };


    keyPress(event: any) {

        this.setState({ textField: event.target.value });
    }
}



const mapStateToProps = (store: IStoreStates) => {
    return {
        directoriesState: store.directoriesState
    }
}


export default connect(mapStateToProps, {
    updateCurrentSourceDirectory: updateCurrentSourceDirectory,
})(HeaderBar);