
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {  Button, List, Popover } from '@material-ui/core';
import { IStoreStates } from '../statesManagement/Store';
import { connect } from 'react-redux';
import { commit, checkin, checkout } from '../statesManagement/manifestsState/ManifestsActions';
import { mergeIn, mergeOut } from '../statesManagement/mergeDataState/MergeDataActions';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { updateCurrentTargetDirectory } from '../statesManagement/directoriesState/DirectoriesActions';


const styles = (theme: any) => ({
	fab: {
		margin: theme.spacing.unit,
		positions: 'relative',
		bottom: theme.spacing.unit,
		right: theme.spacing.unit * 5
	},
	paper: {
		position: '-webkit-sticky' as '-webkit-sticky',
		width: theme.spacing.unit * 50,
		padding: theme.spacing.unit * 4,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		outline: 'none' as 'none'
	}
});

class FloatingActionButtons extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			open: false,
			anchoreEl: null,
			openTargetDirDialog: false,
			action: '',
			targetDir: ''
		};
	}

	handleClick = (event: any) => {
		this.setState({
			anchorEl: event.currentTarget
		});
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleClickOpenTargetDirDialog = () => {
		this.setState({ openTargetDirDialog: true });
	};

	handleCloseTargetDirDialog = () => {
		this.setState({ openTargetDirDialog: false });
	};

	handleAction() {}

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
						horizontal: 'center'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}}
				>
					<div>
						<List>
							<Button onClick={this.props.commit}>Commit</Button>
							<Button
								onClick={() => {
									this.setState({ action: 'Checkin' });
									this.handleClickOpenTargetDirDialog();
								}}
							>
								CheckIn
							</Button>
							<Button
								onClick={() => {
									this.setState({ action: 'Checkout' });
									this.handleClickOpenTargetDirDialog();
								}}
							>
								CheckOut
							</Button>
							<Button
								onClick={() => {
									this.setState({ action: 'MergeIn' });
									this.handleClickOpenTargetDirDialog();
								}}
							>
								MergeIn
							</Button>
							<Button
								onClick={() => {
									this.setState({ action: 'MergeOut' });
									this.handleClickOpenTargetDirDialog();
								}}
							>
								MergeOut
							</Button>
						</List>
					</div>

					<Dialog
						open={this.state.openTargetDirDialog}
						onClose={this.handleCloseTargetDirDialog}
						aria-labelledby="form-dialog-title"
					>
						<DialogTitle id="form-dialog-title">{this.state.action}</DialogTitle>
						<DialogContent>
							<DialogContentText>Please enter a target directory to:</DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Target Directory"
								type="text"
								fullWidth
								onChange={(event) => {
									this.setState({ targetDir: event.target.value });
								}}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleCloseTargetDirDialog} color="primary">
								Cancel
							</Button>
							<Button
								onClick={(event) => {
									this.props.updateCurrentTargetDirectory(this.state.targetDir);
									switch (this.state.action) {
										case 'Checkin':
											this.props.checkin();
											break;
										case 'Checkout':
											this.props.checkout();
											break;
										case 'MergeIn':
											this.props.mergein();
											break;
										case 'MergeOut':
											this.props.mergeout();
											break;

										default:
											break;
									}
									this.handleCloseTargetDirDialog();
								}}
								color="primary"
							>
								{this.state.action}
							</Button>
						</DialogActions>
					</Dialog>
				</Popover>
			</div>
		);
	}
}

const mapStateToProps = (store: IStoreStates) => {
	return {
		manifestState: store.manifestsState,
		mergeDataState: store.mergeDataState
	};
};

export default connect(mapStateToProps, {
	commit: commit,
	checkin: checkin,
	checkout: checkout,
	mergein: mergeIn,
	mergeout: mergeOut,
	updateCurrentTargetDirectory: updateCurrentTargetDirectory

})(withStyles(styles)(FloatingActionButtons));
