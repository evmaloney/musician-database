const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    enum: ['Afro-Cuban/Latin', 'Bebop', 'Big Band/Swing',
      'Cool Jazz', 'Dixieland/Early Jazz', 'Free Jazz',
      'Fusion', 'Hard Bop', 'Post Bop', 'Other'],
    required: true
  },
  musicians: [String],
  postedBy: String
})

module.exports = mongoose.model('Album', albumSchema)