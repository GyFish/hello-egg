
const Service = require('../core/base_service');

class UserService extends Service {

    async findAll() {
        let query = {};
        return this.ctx.model.User.find(query);
    }

    async create(user) {
        let doc = new this.ctx.model.User(user);
        doc.save(function (err, doc1) {
            console.log('  >> saved entity');
            console.log(doc1)
        });
    }

    async findByName(name) {
        let model = this.ctx.model.User;
        return model.find().byName(name).exec(function (err, docs) {
            console.log('  >> findByName, name = ' + name);
            console.log(docs);
        });
    }

    async remove(id) {
        let model = this.ctx.model.User;
        return model.remove({
            '_id': id
        })
    }

}

module.exports = UserService;