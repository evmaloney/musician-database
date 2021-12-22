const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  hometown: {
    type: String,
    required: true
  },
  instrument: {
    type: String,
    enum: ['Trumpet', 'Saxophone', 'Trombone',
      'Guitar', 'Piano', 'Bass', 'Drums'],
    required: true
  },
  albums: [String],
  postedBy: String
})

module.exports = mongoose.model('Artist', artistSchema)