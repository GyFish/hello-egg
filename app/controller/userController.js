'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {

    // list
    async findAll() {

        const users = await this.ctx.service.userService.findAll();
        console.log('  >> users');
        console.log(users);
        this.success(users);
    }

    // create
    async create() {

        let user = this.ctx.request.body;
        const users = await this.ctx.service.userService.create(user);
        this.success(users);
    }

    // 根据名字查找
    async findByName() {
        let name = this.ctx.params.name;
        console.log('  >> name = ' + name);
        this.success(await this.ctx.service.userService.findByName(name))
    }

    // 删除一条记录
    async remove() {
        let id = this.ctx.params._id;
        console.log('  >> delete, id = ' + id);
        this.success(await this.ctx.service.userService.remove(id))
    }

}

module.exports = UserController;
