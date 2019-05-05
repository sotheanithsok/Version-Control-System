import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Typography, withStyles, createStyles, Theme, Button, Grid } from '@material-ui/core';

const MergeModal = forwardRef<MergeModalHandle, MergeModalProps>((props, ref) => {
	const [ isShown, updateIsShow ] = useState(false);

	const showModal = () => {
		updateIsShow(true);
	};
	const closeModal = () => {
		updateIsShow(false);
	};
	
	useImperativeHandle(ref, () => ({
		showModal,
		closeModal
	}));

	const generateLabel = (num: number) => {
		let data = [];
		for (let i = 0; i < num; i++) {
			data.push(
				<Grid item xs={3}>
					<Button id={i.toString()} style={{ backgroundColor: 'Blue', width: '100%' }}>
						{' '}
						{i.toString()}
					</Button>
				</Grid>
			);
		}
		return data;
	};
	return (
		<div>
			<Modal open={isShown} onClose={() => closeModal()}>
				<div className={props.classes.rootModalStyles}>
					<div className={props.classes.mergeOptionsStyles}>
						<Grid container spacing={16} justify="space-evenly">
							{generateLabel(250)}
						</Grid>
					</div>
					<div className={props.classes.controllersStyles}>
						<Button>CLICK HERE</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
});

const styles = ({ palette, spacing, shadows }: Theme) =>
	createStyles({
		rootModalStyles: {
			position: 'absolute',
			// backgroundColor: palette.background.paper,
			boxShadow: shadows[5],
			padding: spacing.unit * 1,
			outline: 'none',
			top: '50%',
			left: '50%',
			height: '80vh',
			width: '80vw',
			transform: 'translate(-50%,-50%)',
			backgroundColor: 'Red'
		},
		controllersStyles: {
			postion: 'relative',
			background: 'yellow'
		},
		mergeOptionsStyles: {
			postion: 'relative',
			background: 'green',
			height: '90%',
			maxHeight: '90%',
			overflowX: 'hidden',
			overflowY: 'auto'
		}
	});

export interface MergeModalProps {
	value: number;
	classes: any;
}

export interface MergeModalHandle {
	showModal(): void;
	closeModal(): void;
}
export default withStyles(styles)(MergeModal);
