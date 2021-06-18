const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({

    title: {type: String, required: true},
    description: String

});

const Model = mongoose.model('Home', HomeSchema);

module.exports = Model;