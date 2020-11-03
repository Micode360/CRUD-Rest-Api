const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type: String, required: true },
    description: {type: String, required: true }
},{
    timestamps:true,
});

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;