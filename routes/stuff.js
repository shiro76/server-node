const express = require('express');
const router = express.Router();

//importer le controller stuff pour la logique de route
const stuffCtrl = require('../controllers/stuff');

// Avec ceci, Express prend toutes les requêtes qui ont comme Content-Type  application/json 
// et met à disposition leur  body  directement sur l'objet req, ce qui nous permet d'écrire le middleware POST suivant
// router.post remplace router.use pour repondre uniquement au requete de type post
//exemple static 
// router.post('/api/stuff',(req, res, next) => {
//     console.log(req.body);
//     res.status(201).json({
//         message: "Objet crée !"
//     });
// })

//replacer la route '/api/stuff' par '/' car nous avons le fichier stuff.js dans le dossier routes
router.post('/', stuffCtrl.createThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);
router.get('/:id', stuffCtrl.getOneThing);
// router.get remplace router.use pour repondre uniquement au requete de type get
router.get('/', stuffCtrl.getAllThing);

module.exports = router;