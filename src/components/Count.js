import React, { useState, useEffect } from 'react';

const Count = () => {
	let [count, setCount] = useState(0);

	const clickHandler = () => {
		setCount((prev) => prev + 1);
	};

	const [person, setPerson] = useState({
		name: 'Hasnaat',
		location: 'Manchester',
	});

	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

	const nameChangeHandler = () => {
		setPerson((prev) => {
			return {
				...prev,
				location: 'Liverpool',
			};
		});
	};

	const numberChangeHandler = () => {
		setNumbers((prev) => {
			return [...prev, 6];
		});
	};

	// Use Effect
	useEffect(() => {
		console.log('Component re-rendered');
	}, []);

	useEffect(() => {
		return () => {
			console.log('Component unmounted');
		};
	}, []);

	useEffect(() => {
		console.log(`You've clicked ${count} times`);
	}, [count]);

	console.log('Component rendered');
	return (
		<div>
			<div>
				<p>Count is {count}</p>
				<button onClick={clickHandler}>Increment</button>
			</div>
			<div>
				<p>My name is {person.name}</p>
				<p>I live in {person.location}</p>
				<button onClick={nameChangeHandler}>Change Name</button>
			</div>

			<div>
				<p>My numbers are {numbers}</p>
				<button onClick={numberChangeHandler}>Change Number</button>
			</div>
		</div>
	);
};

export default Count;
