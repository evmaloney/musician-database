const express = require('express')
const router = express.Router()
const albumsCtrl = require('../controllers/albums')
const isLoggedIn = require('../config/auth')

router.get('/', albumsCtrl.index);
router.get('/new', isLoggedIn, albumsCtrl.new)
router.post('/', isLoggedIn, albumsCtrl.create);
router.get('/:id', albumsCtrl.show);
router.post('/artists/:artistId/albums', albumsCtrl.addToCollection)
router.delete('/:id', albumsCtrl.deleteAlbum);


module.exports = router