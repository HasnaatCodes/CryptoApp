import React from 'react';
import classes from './SimpleContainer.module.css';

const SimpleContainer = ({ children }) => {
	return <div className={classes.container}>{children}</div>;
};

export default SimpleContainer;
