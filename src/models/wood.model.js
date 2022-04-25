const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const woodSchema = mongoose.Schema(
  {
    diameter: {
      type: String,
      required: false
    },
    panjang: {
      type: String,
      required: false
    },
    kubikasi: {
      type: String,
      required: false
    },
    jml_batang: {
      type: String,
      required: false
    },
    volume: {
      type: String,
      required: false
    },
    jumlah: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
woodSchema.plugin(toJSON);
woodSchema.plugin(paginate);

/**
 * @typedef Wood
 */
const Wood = mongoose.model('Wood', woodSchema);

module.exports = Wood;
