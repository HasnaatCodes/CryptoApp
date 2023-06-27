import classes from './ThemeToggle.module.css';
import ThemeToggleImage from '../../images/ThemeToggle.svg';

const ThemeToggle = () => {
	return (
		<div className={classes.image_div}>
			<img src={ThemeToggleImage} alt="Toggle Light or Dark Theme" />
		</div>
	);
};

export default ThemeToggle;
