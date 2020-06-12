var express = require('express');

var controller = require('../controllers/user.controller');
var validation = require('../validation/user.validation');
var authMiddleware = require('../middlewares/admin.middleware');

var router = express.Router();

router.get('/', controller.index);

router.get('/create', authMiddleware.requireAdminUser, controller.create);

router.get('/:id/views', authMiddleware.requireAdminUser, controller.views);

router.get('/:id/update', authMiddleware.requireAdminUser, controller.update);

router.get('/:id/delete', authMiddleware.requireAdminUser, controller.delete);

router.get('/search', controller.search);

router.post('/create', validation.postCreate, controller.postCreate);

router.post('/update', controller.postUpdate);

module.exports = router;





