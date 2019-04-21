const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    }
});

const FileModel = mongoose.model('files', FileSchema);
module.exports = FileModel;
