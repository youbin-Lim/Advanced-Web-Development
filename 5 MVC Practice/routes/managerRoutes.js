const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

router.post('/managers', managerController.addManager);
router.get('/managers', managerController.getManagers);
router.get('/managers/:id', managerController.getManagerById);
router.delete('/managers/:id', managerController.deleteManager);

module.exports = router;