const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

router.get( '/', stuffCtrl.getAllThings );

router.post( '/', stuffCtrl.createOneThing );

router.get( '/:id', stuffCtrl.getOneThing );

router.put( '/:id', stuffCtrl.updateOneThing );

router.delete( '/:id', stuffCtrl.deleteOneThing );


module.exports = router;