/*
 * 引入 React 程式庫
 */
import React from 'react';
import { render } from 'react-dom';

/*
 * 引入 React Material UI 元件程式庫
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MyAppBar } from './Components/MyAppBar';
import { MyGridList } from './Components/MyGridList';

const muiTheme = getMuiTheme();

const App = () => (
		<MuiThemeProvider muiTheme={muiTheme}>
			<div>
	      		<MyAppBar title="App" />
	      		<MyGridList />
			</div>
    	</MuiThemeProvider>
	);

render(
    <App />,
    document.getElementById('content')
);