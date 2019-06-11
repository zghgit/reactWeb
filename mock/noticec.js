'use strict';

module.exports = {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  // 'POST /api/users/create1': (req, res) => {
  //   // res.end('OK');
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  // },

  'POST /api/forms': (req, res) => {
    setTimeout(() => {
      res.send('Ok');
    }, 1000);
  },

};
