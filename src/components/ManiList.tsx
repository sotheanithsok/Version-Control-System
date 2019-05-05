import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { IStoreStates } from '../statesManagement/Store';
import { connect } from 'react-redux';
import { updateLabel } from '../statesManagement/manifestsState/ManifestsActions';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import spacing from '@material-ui/core/styles/spacing';

const styles = (theme: { palette: { background: { paper: any } } }) => ({
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
	}
});

class ManiList extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			artifacts: [],
			right: false
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
						{element.id}
					</ListItem>
				);
			else
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
						{element.tag}
					</ListItem>
				);
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
			</div>
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
