var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

router.route('/')
  .get(controller.index)
  .post(controller.create);

router.route('/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.destroy);

router.route('/login')
  .post(controller.login);

module.exports = router;
