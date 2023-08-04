import classes from './Graph.module.css';

const Graph = ({ children }) => {
	return <div className={classes.graph}>{children}</div>;
};

export default Graph;
