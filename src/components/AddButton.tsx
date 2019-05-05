// React Project
import React from 'react';
import { connect } from 'react-redux';

// Material-ui Modules
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Popover from '@material-ui/core/Popover';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// Project Modules
import { IStoreStates } from '../statesManagement/Store';
import { commit, checkin, checkout } from '../statesManagement/manifestsState/ManifestsActions';
import { mergeIn, mergeOut, clearMergeData } from '../statesManagement/mergeDataState/MergeDataActions';
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
	},

	modal: {
		position: 'absolute' as 'absolute',
		outline: 'none' as 'none',
		top: '50%',
		left: '50%',
		height: '80vh',
		width: '80vw',
		transform: 'translate(-50%,-50%)',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5]
	},

	ul: {
		listStyle: 'none' as 'none'
	},

	formControl: {
		margin: theme.spacing.unit * 3,
	}
});

class FloatingActionButtons extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			open: false,
			modalOpen: false,
			anchoreEl: null,
			openTargetDirDialog: false,
			action: '',
			targetDir: '',
			mergeDate: []
		};
	};

	openModal = () => {
		this.setState({ modalOpen: true });
	};

	closeModal = () => {
		this.setState({ modalOpen: false });
		this.props.clearMergeData()
	};

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

	handleMergeSelectChange = (event: any) => {
		this.props.mergeDataState[event.target.name].choice = event.target.value;
		console.log(this.props.mergeDataState)
	};

	render() {
		const { classes } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		const mergeData = this.props.mergeDataState.map((item: any, key: any) => {
			var file = item.source;

			if (file) {
				return (
					<li key={key}>
						<FormControl className={classes.formControl}>
							<FormLabel>MergeType: {item.mergeType} - {file.substring(0, file.lastIndexOf('/'))}</FormLabel>
							<RadioGroup
								name={key}
								className={classes.group}
								value={item.choice}
								onChange={this.handleMergeSelectChange}>

								<FormControlLabel value='Source' disabled={item.choice==="Target"} control={<Radio />} label='Source' />
								<FormControlLabel value='Target' disabled={item.choice==="Source"} control={<Radio />} label='Target' />
							</RadioGroup>
						</FormControl>
					</li>
				);
			}
		});

		return (
			<div>
				<Fab
					color='secondary'
					className={classes.fab}
					onClick={this.handleClick}>
					<AddIcon />
				</Fab>

				<Popover
					id='simple-popper'
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
					}}>
					<div>
						<List>
							<Button onClick={this.props.commit}>Commit</Button>
							<Button
								onClick={() => {
									this.setState({ action: 'Checkin' });
									this.handleClickOpenTargetDirDialog();
								}}>
								CheckIn
							</Button>
							<Button
								onClick={() => {
									this.setState({ action: 'Checkout' });
									this.handleClickOpenTargetDirDialog();
								}}>
								CheckOut
							</Button>
							<Button
								onClick={() => {
									this.setState({ action: 'Merge' });
									this.handleClickOpenTargetDirDialog();
								}}>
								Merge
							</Button>
						</List>
					</div>

					<Dialog
						open={this.state.openTargetDirDialog}
						onClose={this.handleCloseTargetDirDialog}
						aria-labelledby='form-dialog-title'>
						<DialogTitle id='form-dialog-title'>{this.state.action}</DialogTitle>
						<DialogContent>
							<DialogContentText>Please enter a target directory to:</DialogContentText>
							<TextField
								autoFocus
								margin='dense'
								id='name'
								label='Target Directory'
								type='text'
								fullWidth
								onChange={(event) => {
									this.setState({ targetDir: event.target.value });
								}} />
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleCloseTargetDirDialog} color='primary'>
								Cancel
							</Button>
							<Button
								color='primary'
								onClick={(event) => {
									this.props.updateCurrentTargetDirectory(this.state.targetDir);
									switch (this.state.action) {
										case 'Checkin':
											this.props.checkin();
											break;
										case 'Checkout':
											this.props.checkout();
											break;
										case 'Merge':
											this.props.mergeout();
											this.openModal();

											break;
										default:
											break;
									}
									this.handleCloseTargetDirDialog();
								}}>
								{this.state.action}
							</Button>
						</DialogActions>
					</Dialog>
				</Popover>

				<Modal
					open={this.state.modalOpen}
					onClose={this.closeModal}>
					<div className={classes.modal}>
						<ul className={classes.ul}>
							{mergeData}
						</ul>

						<Button onClick={() => {
							this.props.mergein();
							this.closeModal();
						}}>
							Merge
						</Button>
					</div>
				</Modal>
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
	updateCurrentTargetDirectory: updateCurrentTargetDirectory,
	clearMergeData:clearMergeData
})(withStyles(styles)(FloatingActionButtons));
