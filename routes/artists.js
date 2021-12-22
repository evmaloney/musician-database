const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');
const isLoggedIn = require('../config/auth')

router.get('/', artistsCtrl.index);
router.get('/new', isLoggedIn, artistsCtrl.new);
router.post('/', isLoggedIn, artistsCtrl.create);
router.get('/:id', artistsCtrl.show);
router.delete('/artists/:id', artistsCtrl.deleteArtist)

module.exports = router