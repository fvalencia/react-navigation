
import React from 'react';
import styles from './dashboard.css';
import NavBar from './navbar/navbar.jsx';

class DashBoard extends React.Component {

  render() {
    return (
      <div className={styles.dashboard}>
        <NavBar data={this.props.context.data} />
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default DashBoard;
