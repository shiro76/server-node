const express = require('express');
const app = express();

//ajouter la route stuff
const stuffRoutes = require('./routes/stuff');
//user route
const userRoutes = require('./routes/user');

// Pour gérer la requête POST venant de l'application front-end, on a besoin d'en extraire le corps JSON
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:v4BWHr1NVn4rUqws@app1.has12se.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// app.use((req, res, next) => {
//     console.log('1:', "requete recue");
//     next();
// });

// app.use((req, res, next) => {
//     res.status(201);
//     next();
// });

// app.use((req, res, next) => {
//     res.json({message: "Requete bien recue !"});
//     next();
// });

// app.use((req, res) => {
//     console.log('Réponse envoyée avec succes !');
// });

//permet de gerer l'acces au requetes 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;