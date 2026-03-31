const express = require('express');
const router = express.Router();
const internController = require('../controllers/internController');

router.post('/interns', internController.addIntern);
router.get('/interns', internController.getInterns);
router.get('/interns/:id', internController.getInternById);
router.delete('/interns/:id', internController.deleteIntern);

module.exports = router;