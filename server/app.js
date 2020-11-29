require('./db/config');
const express = require('express'),
  app = express(),
  cookieParser = require('cookie-parser'),
  passport = require('./middleware/authentication/index'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/users'),
  projectRouter = require('./routes/secure/projects'),
  commentRouter = require('./routes/secure/comments');

//Middleware
app.use(express.json());

// Unauthenticated routes
app.use('/api', openRoutes);
app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.
app.use('/api/*', passport.authenticate('jwt', { session: false }));
app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/projects', commentRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = app;
