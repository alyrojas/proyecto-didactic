const{Schema,model} =require('mongoose');

const temasSchema = new Schema({
    cveTema: {type: Number,required:true},
    nombre: {type: String,required:true},
    tipo: {type: String,required:true},
    valor: {type: Number,required:true},
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Actividades',temasSchema);
