const Album = require('../models/album')
const Artist = require('../models/artist')

module.exports = {
  new: newAlbum,
  create,
  index,
  show,
  deleteAlbum,
  addToCollection
}

function newAlbum(req, res) {
  res.render('albums/new', {
    title: 'New Album'
  });
}

function create(req, res) {
  Album.create(req.body, function (err, album) {
    if (err) return res.redirect('/albums/new');
    console.log(album);
    res.redirect('/albums');
  });
}

function index(req, res) {
  Album.find({}, function (err, albums) {
    res.render('albums/index', {
      title: 'Albums',
      albums
    });
  });
}

function show(req, res) {
  Album.findById(req.params.id, function (err, album) {
    res.render('albums/show', {
      title: 'Album Page',
      album
    })
  });
}

function deleteAlbum(req, res) {
  Album.findByIdAndRemove(req.params.id)
    .then(function () {
      res.redirect('/albums')
    }).catch(function (err) {
      console.log(err)
    });
}

function addToCollection(req, res) {
  Artist.findById(req.params.artistId, function (err, artist) {
    artist.collections.push(req.body.albumId)
    artist.save(function (err) {
      res.redirect(`/artists/${artist._id}`)
    });
  });
}

