var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

router.route('/')
  .get(controller.index);

router.route('/:id/sendCards')
  .get(require('connect-ensure-login').ensureLoggedIn(), controller.emailForm)
  .post(require('connect-ensure-login').ensureLoggedIn(), controller.sendCard);

router.route('/:id')
  .get(require('connect-ensure-login').ensureLoggedIn(), controller.show)
  .put(require('connect-ensure-login').ensureLoggedIn(), controller.update)
  .delete(require('connect-ensure-login').ensureLoggedIn(), controller.destroy);

module.exports = router;
