import { useState } from 'react';
import ProtoTypes from 'prop-types';
import './style.css'

export const CounterApp = ({value}) => {

	const [ counter , setCounter ] = useState(value)

	const handleAdd = () => setCounter( counter + 1 )

	const handleSubs = () => setCounter( counter - 1 )
	
	const handleReset = () => setCounter( value )

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{ counter }</h2>

			<button onClick={handleAdd}>
				+1
			</button>

			<button onClick={handleSubs}>
				-1
			</button>

			<button onClick={handleReset}>
				Reset
			</button>
		</>

	);
}

CounterApp.protoTypes = {

	value: ProtoTypes.number.isRequired

}