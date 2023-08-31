import { useState } from 'react'
import './lorem-style.css'
import Form from './components/Form';

const LoremApp = () => {
	// Count State
	const [count, setCount] = useState(1);

	return (
		<div className="container">
			<h1 className='header'>Tired of boring lorem ipsum?</h1>
			<Form count={count} setCount={setCount} />
		</div>
	);
}

export default LoremApp;