'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {


  // list
  async users() {

  	var users = await this.ctx.service.user.findAll();

  	console.log('  >> users');
  	console.log(users);

    this.body = users;

  }


}

module.exports = UserController;
