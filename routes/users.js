var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

router.route('/')
  .get(controller.index)
  .post(controller.create);

router.route('/login')
  .post(controller.login);

router.route('/:id/sendCards')
  .get(controller.emailForm)
  .post(controller.sendCard);

router.route('/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.destroy);

module.exports = router;
