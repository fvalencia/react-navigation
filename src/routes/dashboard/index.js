import React from 'react';
import Dashboard from './dashboard.jsx';
import Home from './home/home.jsx';
import Profile from './profile/profile.jsx';
import Inbox from './inbox/inbox.jsx';

export default {

  path: '/dashboard',

  children: [
  	{
  	  path: '/',	
  	  async action(context) {
  	    return {
  	      title: 'Home',
  	      component:<Dashboard context={context}> 
                      <Home /> 
                    </Dashboard>
  	    };
  	  },
  	},
    {
      path: '/profile',
      async action(context) {
        return {
          title: 'Profile',
          component: <Dashboard context={context}>
                      <Profile />
                    </Dashboard>,
        };
      },
    },
    {
      path: '/inbox',
      async action(context) {
        return {
          title: 'Inbox',
          component: <Dashboard context={context}>
                      <Inbox />
                    </Dashboard>,
        };
      },
    }
  ],

};
