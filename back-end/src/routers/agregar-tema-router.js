const {Router}= require('express');
const router=Router();
const temaController= require('../controllers/agregar-tema-controller.js');


//Consultar todos los Temas
router.get('/temas',temaController.getTemas);
//Consultar un Tema        
router.get('/temas/:cveTema',temaController.getTema);
//Crear un Tema
router.post('/temas',temaController.createTemas);
//Actualizar un Tema
router.put('/temas/:cveTema',temaController.updateTemas);
//Eliminar un Tema 
router.delete('/temas/:cveTema',temaController.deleteTemas);



module.exports= router;