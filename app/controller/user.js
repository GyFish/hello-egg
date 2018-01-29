'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {


  // list
  async users() {

  	const users = await this.ctx.service.user.findAll();

  	console.log('  >> users');
  	console.log(users);

    this.success(users);

  }


}

module.exports = UserController;
