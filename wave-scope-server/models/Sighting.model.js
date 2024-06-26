const { Schema, model } = require('mongoose')

const sightingSchema = new Schema(
  {
    images: {
      type: [String],
      default: ["https://res.cloudinary.com/dc7ycwd1u/image/upload/v1717426324/Anadir_un_titulo_nrrbmv.png"]
    },
    location: {
      type: {
        type: String,
      },
      coordinates: {
        type: [Number]
      }
    },
    beach: {
      type: Schema.ObjectId,
      ref: 'Beach',
      required: [true, 'Beach name is required']
    },
    specimen: {
      type: Schema.ObjectId,
      ref: 'Specimen',
      required: [true, 'Specimen name is required']
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: [true, 'User name is required']
    },
    comment: {
      type: String
    },
    confirmations: {
      type: [Schema.ObjectId],
      ref: 'User',
      default: []
    },
    rejections: {
      type: [Schema.ObjectId],
      ref: 'User',
      default: []
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('Sighting', sightingSchema)