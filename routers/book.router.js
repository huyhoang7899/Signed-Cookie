var express = require('express');
var controller = require('../controllers/book.controller');
var authMiddleware = require('../middlewares/admin.middleware');

var router = express.Router();

router.get('/', controller.index);

router.get('/create', authMiddleware.requireAdminBook, controller.create);

router.get('/:id/update', authMiddleware.requireAdminBook, controller.update);

router.get('/:id/delete', authMiddleware.requireAdminBook, controller.delete);

router.get('/search', controller.search);

router.post('/create', controller.postCreate);

router.post('/update', controller.postUpdate);

module.exports = router;
