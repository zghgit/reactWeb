'use strict';

module.exports = {
  'GET /api/login': (req, res) => {
    setTimeout(() => {
      res.json({
        success: true,
        data: ['foo', 'bar'],
      });
      // res.send('Ok');
    }, 500);
  },
};
