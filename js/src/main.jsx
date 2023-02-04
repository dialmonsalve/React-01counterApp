import React from 'react'
import ReactDOM from 'react-dom/client';
/* import {HelloWorldApp} from './HelloWorldApp';
import {MyFirstApp} from './MyFirstApp' */
import  { CounterApp }  from './CounterApp'


/* ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelloWorldApp/>
	</React.StrictMode>
) */

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterApp value={30}/>
	</React.StrictMode>
)