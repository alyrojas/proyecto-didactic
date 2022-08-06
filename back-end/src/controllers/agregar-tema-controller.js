const temaController={};

const Temas = require('../models/Temas');

 //Consultando Temas
temaController.getTemas=(req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM temas',(err,rows) => {
            if(err){
                res.json(err);
            }
            res.json(rows);
        });
    });
}

//Consultando Tema

temaController.getTema= (req,res)=>{
    const { cveTema } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM temas WHERE _cveTema = ?',
                            [cveTema],(err,rows) => {
            res.send(rows);
        });
    });
}

//Creando Tema
temaController.createTemas=(req,res) => {
    const data= req.body;
    console.log(data);
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO temas SET ?',
                        [data],(err,tema) => {
            res.redirect('/temas');
        });
    });
    
}


temaController.updateTemas= (req,res)=>{
    const { cveTema } = req.params;
    const  data  = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE temas SET ? WHERE _cveTema = ?',
                                [data, cveTema],(err,rows) => {
            res.redirect('/temas');
        });
    });
}


temaController.deleteTemas= (req,res)=>{
    const { cveTema } = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM temas WHERE _cveTema = ?',
                            [cveTema],(err,rows) => {
            res.send(rows);
        });
    });
}

module.exports= temaController;
