const Artist = require('../models/artist')
const Album = require('../models/album')

module.exports = {
  new: newArtist,
  create,
  index,
  show,
  deleteArtist,
  edit,
  update
}

function newArtist(req, res) {
  res.render('artists/new', {
    title: 'New Artist'
  });
}

function create(req, res) {
  // // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // const string = req.body.born;
  // req.body.born = `${string.substr(5, 2)}-${string.substr(8, 2)}-${string.substr(0, 4)}`;
  Artist.create(req.body, function (err, artist) {
    if (err) return res.redirect('/artists/new');
    console.log(artist);
    res.redirect('/artists');
  });
}

// Artist.findByIdAndUpdate

function index(req, res) {
  Artist.find({}, function (err, artists) {
    res.render('artists/index', {
      title: 'Artists',
      artists
    });
  });
}

function show(req, res) {
  Artist.findById(req.params.id).populate('collections').exec(function (err, artist) {
    Album.find({ _id: { $nin: artist.collections } }, function (err, albums) {
      res.render('artists/show', {
        title: 'Artist Page',
        artist,
        albums
      })
    });
  });
}

function deleteArtist(req, res, next) {
  Artist.findByIdAndRemove(req.params.id)
    .then(function () {
      res.redirect('/artists')
    }).catch(function (err) {
      console.log(err)
    });
}

function edit(req, res) {
  Artist.findById(req.params.id, req.body, function (err, artist) {
    if (err) return res.redirect('/artists');
    res.render('artists/edit', { artist });
  });
}

function update(req, res) {
  Artist.findByIdAndUpdate(req.params.id, req.body, function (err, artist) {
    if (err) return res.redirect('/artists');
    res.redirect(`/artists/${artist._id}`);
  }
  );
}