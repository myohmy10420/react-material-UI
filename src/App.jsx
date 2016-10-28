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

const muiTheme = getMuiTheme(darkBaseTheme);

const App = () => (
		<MuiThemeProvider muiTheme={muiTheme}>
      		<MyAppBar title="App" />
    	</MuiThemeProvider>
	);

render(
    <App />,
    document.getElementById('content')
);