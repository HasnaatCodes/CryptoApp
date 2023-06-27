import classes from './SearchBar.module.css';

const SearchBar = () => {
	return (
		<label className={classes.search}>
			<input type="text" placeholder="Search..." />
		</label>
	);
};

export default SearchBar;
