var mongoose = require('mongoose');

var UserSchema = new mongooe.Schema({
    name: {type: String, required:true},
    name: {type: String, required:true unique: true},
},{timestamps:true})

mongooe.model('User', UserSchema);
