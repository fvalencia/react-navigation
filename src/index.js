import React from 'react';
import ReactDOM from "react-dom";
import Router from "universal-router";
import routes from './routes';
import history from './history';
import App from './components/App';

const container = document.getElementById('root');
let currentLocation = history.location;
let router = new Router(routes);

async function onLocationChange(location, action) {
  //console.log(location);	
  currentLocation = location;
  try {
    const route = await router.resolve({
	  path: location.pathname,
	  data: location.state
	});

	//console.log(route, location.pathname);

	ReactDOM.render(
	  <App>
	  	{route.component}
	  </App>,
	  container
	);
  } catch (error) {
    console.error(error);
  }
}

history.listen(onLocationChange);
onLocationChange(currentLocation);