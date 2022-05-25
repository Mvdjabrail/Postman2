const {Router} = require('express');
const { brendsController } = require('../controllers/brends.controller');
const router = Router();

router.get('/brends', brendsController.getBrands)
router.post('/brends', brendsController.postBrands)
router.delete('/brends', brendsController.removeBrands)

module.exports = router;