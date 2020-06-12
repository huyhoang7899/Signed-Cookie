var express = require('express');
var controller = require('../controllers/transaction.controller');
var validation = require('../validation/transaction.validation');
var authMiddleware = require('../middlewares/admin.middleware');

var router = express.Router();

router.get('/', controller.index);

router.get('/create', authMiddleware.requireAdminTransaction, controller.create)

router.get('/:id/update', authMiddleware.requireAdminTransaction, controller.update);

router.get('/:id/delete', authMiddleware.requireAdminTransaction, controller.delete);

router.get('/:id/complete', authMiddleware.requireAdminTransaction, validation.complete, controller.complete);

router.get('/search', authMiddleware.requireAdminTransaction, controller.search);

router.post('/create', controller.postCreate);

router.post('/update', controller.postUpdate);

module.exports = router;
