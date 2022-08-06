const express = requiere('express');
const router= express.Router();
const temas= require('../models/Temas');
const actividad= require('../models/Actividades');

//Listar todos los temas
router.get('/temas',(req,res) => {
    Temas.find({},(err,temas) => {
    return res.json(temas);
});
});

//Dar de alta un tema
router.post('/temas',(req,res) => {
    Temas.create(req.body,(err, temas) => {
    if(err){
        res.json(err);
    }else{ 
        return res.json(temas)
    }
});
});


//Listar todos los temas
router.get('/actividad',(req,res) => {
    Actividades.find({},(err,actividad) => {
    return res.json(actividad);
});
});

//Dar de alta un tema
router.post('/actividad',(req,res) => {
    Actividades.create(req.body,(err, actividad) => {
    if(err){
        res.json(err);
    }else{ 
        return res.json(actividad)
    }
});
});

module.exports= router;
