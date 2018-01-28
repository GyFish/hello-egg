'use strict';

const Controller = require('../core/base_controller');

class SurveyController extends Controller {


  // list
  async survey() {

  	let survey = {
  		id: 1,
  		name: "hello",
  		desc: "hello world!"
  	};
  	
    this.success(survey);

  }


}

module.exports = SurveyController;
