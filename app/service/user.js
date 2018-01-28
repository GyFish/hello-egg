// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {

  async findAll(uid) {

  	var users = {};

	var client = require('mongodb').MongoClient;
	var url = 'mongodb://localhost:27017/geyu';
	 
	var selectData = function(db, callback) {  
	  //连接到表  
	  var collection = db.collection('user');
	  //查询数据
	  var whereStr = {};
	  collection.find(whereStr).toArray(function(err, result) {
	    if(err)
	    {
	      console.log('Error:'+ err);
	      return;
	    }     
	    callback(result);
	  });
	}    
	 
	await client.connect(url, function(err, db) {
	  console.log("连接成功！");
	  selectData(db, function(result) {
	  	console.log('   >> result = ');
	    console.log(result);
	    users = result;
	    db.close();
	    return users;
	  });
	});

    return users;

  }

}

module.exports = UserService;