import * as React from 'react';
import ReactDOM  from 'react-dom/client';
import { App } from './firstApp';
//import { TaskApp } from './TaskApp';




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

	<React.StrictMode>
		<App/>
	</React.StrictMode>
)