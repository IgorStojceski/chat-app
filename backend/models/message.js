const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    messages: String
});

module.exports =  mongoose.model('Message', messageSchema);

