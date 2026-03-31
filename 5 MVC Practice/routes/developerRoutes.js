const express = require('express');
const router = express.Router();
const developerController = require('../controllers/developerController');

router.post('/developers', developerController.addDeveloper);
router.get('/developers', developerController.getDevelopers);
router.get('/developers/:id', developerController.getDeveloperById);
router.delete('/developers/:id', developerController.deleteDeveloper);

module.exports = router;