const express = require('express');
const { userRouter, authRouter } = require('../../router.index');

const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/users',
    route: userRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
