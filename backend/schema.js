var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema({
    id: {type: Number, required: true}, 
    title: {type: String, required: true},
    detail: {type: String, required: true },
    like: {type: Number, required: false, default: 0 },
    dislike: {type: Number, required: false, default: 0 }
})

var JokeModel = mongoose.model('backendtest', Schema);
module.exports = JokeModel;