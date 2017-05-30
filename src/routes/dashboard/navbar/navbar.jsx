
import React from 'react';
import styles from '../dashboard.css';
import Link from '../../../components/Link';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {Button, IconButton} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import history from '../../../history';

class Navbar extends React.Component {

  goHome = (event) => {
  	 event.preventDefault();
  	 history.push({
      pathname: '/dashboard',
      state: this.props.data
    });
  };	

  render() {
    return (
      <AppBar title={`Hello ${this.props.data.login}`} rightIcon={<FontIcon value='home' />} onRightIconClick={this.goHome}>
	    <Navigation type='horizontal'>
		    <Link to='/dashboard/inbox' {...this.props}><Button icon='inbox' label='Inbox' flat /></Link>
		    <Link to='/dashboard/profile' {...this.props}><Button icon='account_circle' label='Profile' flat /></Link>
	    </Navigation>
	  </AppBar>
    );
  }
}

export default Navbar;
