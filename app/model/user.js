
module.exports = app => {

    const mongoose = app.mongoose;

    const userSchema = new mongoose.Schema({
        name:       String,
        age:        Number,
        sex:        String,
        birthday:   Date,
        book: {
            name:   String,
            titles:   Array
        }
    });

    userSchema.query.byName = function(name){
        return this.find({
            name: new RegExp(name)
        });
    };

    return mongoose.model('User', userSchema);
};
