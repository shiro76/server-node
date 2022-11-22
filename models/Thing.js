const mongoose = require('mongoose');
//creer un schema de donnee pour les choses
const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, required: true },
});
//exporter le modele de donnee
module.exports = mongoose.model('Thing', thingSchema);
