'use strict';

// config/config.default.js
module.exports = {
  
  keys: 'demo' + '_1517046401873_3118',

  // 加载 errorHandler 中间件
  middleware: [ 'errorHandler' ],

  // 只对 /api 前缀的 url 路径生效
  errorHandler: {
    match: '/api',
  },

  mongoose: {
    url: 'mongodb://127.0.0.1:27017/geyu',
    options: {}
  }

};
