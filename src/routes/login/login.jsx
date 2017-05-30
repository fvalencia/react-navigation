/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../../components/Link';
import styles from './login.css';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import history from '../../history';
import Logo from './logo.svg';

class Login extends React.Component {

  state = { login: '', password: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  submitForm = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/dashboard',
      search: '',
      state: this.state
    });
  };

  render() {
    return (
      <div className={styles.login}>
        <form autoComplete='new-password' onSubmit={this.submitForm}>
          <Card theme={styles}>
            <CardText>
              <div className={styles.center}>
                <Logo width={80} height={80}/>
              </div>
              <Input type='text' label='Login' name='login' value={this.state.login} onChange={this.handleChange.bind(this, 'login')} theme={styles} />
              <Input type='password' label='Password' name='password' value={this.state.password} onChange={this.handleChange.bind(this, 'password')} autoComplete='new-password' theme={styles}  />
            </CardText>
            <CardActions theme={styles}>
              <Button label="Access" type="submit"/>
            </CardActions>
          </Card>
        </form>
      </div>
    );
  }
}

export default Login;
