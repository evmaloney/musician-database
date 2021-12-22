const Artist = require('../models/artist')

module.exports = {
  new: newArtist,
  create,
  index,
  show,
  deleteArtist
}

function newArtist(req, res) {
  res.render('artists/new', {
    title: 'New Artist'
  });
}

function create(req, res) {
  const artist = new Artist(req.body);
  artist.save(function (err) {
    if (err) return res.redirect('/artists/new');
    console.log(artist);
    res.redirect(`/artists`);
  });
}

function index(req, res) {
  Artist.find({}, function (err, artists) {
    res.render('artists/index', {
      title: 'Artists',
      artists
    });
  });
}

function show(req, res) {
  Artist.findById(req.params.id, function (err, artist) {
    res.render('artists/show', {
      title: 'Artist Page',
      artist
    })
  });
}

function deleteArtist(req, res, next) {
  const artist = artist.id(req.params.id);
  artist.remove();
  then(function () {
    res.redirect('/artists');
  }).catch(function (err) {
    return next(err);
  });
}