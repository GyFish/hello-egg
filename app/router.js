'use strict';

module.exports = app => {

    const { router, controller } = app;

    router.get('/', controller.home.index);

    router.post('/api/v1/user', controller.userController.create);

    router.get('/api/v1/user/findByName/:name', controller.userController.findByName);

    router.get('/api/v1/users', controller.userController.findAll);

    router.delete('/api/v1/user/:_id', controller.userController.remove)

};
