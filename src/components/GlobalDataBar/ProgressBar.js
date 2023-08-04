import classes from './ProgressBar.module.css';

const ProgressBar = ({ percent }) => {
	return (
		<div className={classes.progress_bar}>
			<div className={classes.inner_bar} style={{ width: `${percent}%` }}></div>
		</div>
	);
};

export default ProgressBar;
