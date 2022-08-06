const {Router}= require('express');
const router=Router();
const actividadController= require('../controllers/agregar-actividad-controller');


//Consultar todos las Actividades
router.get('/actividades',actividadController.getActividades);
//Consultar una Actividad       
router.get('/actividades/:cveActividad',actividadController.getActividad);
//Crear una Actividad
router.post('/actividades',actividadController.createActividades);
//Actualizar una Actividad
router.put('/actividades/:cveActividad',actividadController.updateActividades);
//Eliminar una Actividad 
router.delete('/actividades/:cveActividad',actividadController.deleteActividades);



module.exports= router;