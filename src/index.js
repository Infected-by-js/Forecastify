import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { Global } from './styles/GlobalStyles';

render(
	<React.StrictMode>
		<Global />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
