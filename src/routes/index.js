export default {

  path: '/',
  children: [
    require('./login').default,
    require('./dashboard').default,
    require('./error').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();
    return route;
  },

};
