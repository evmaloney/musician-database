const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
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
  collections: [{
    type: Schema.Types.ObjectId,
    ref: 'Album'
  }],
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Artist', artistSchema)