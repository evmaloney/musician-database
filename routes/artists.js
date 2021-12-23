const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');
const isLoggedIn = require('../config/auth')

router.get('/', artistsCtrl.index);
router.get('/new', isLoggedIn, artistsCtrl.new);
router.post('/', isLoggedIn, artistsCtrl.create);
router.get('/:id', artistsCtrl.show);
router.delete('/:id', artistsCtrl.deleteArtist)
router.get('/:id/edit', artistsCtrl.edit)
router.put('/:id', artistsCtrl.update)

module.exports = router