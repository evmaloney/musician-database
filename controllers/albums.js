const Album = require('../models/album')

module.exports = {
  new: newAlbum,
  create,
  index,
  show
}

function newAlbum(req, res) {
  res.render('albums/new', {
    title: 'New Album'
  });
}

function create(req, res) {
  const album = new Album(req.body);
  album.save(function (err) {
    if (err) return res.redirect('/albums/new');
    console.log(album);
    res.redirect(`/albums`);
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