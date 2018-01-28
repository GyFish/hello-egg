'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;

  router.get('/', controller.home.index);

  // 根据 id 查找
  router.get('/api/v1/survey', app.controller.survey.survey);


  router.get('/api/v1/users', app.controller.user.users);


};
