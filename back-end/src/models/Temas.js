const{Schema,model} =require('mongoose');

const temasSchema = new Schema({
    cveArea: {type: Number,required:true},
    nombre: {type: String,required:true},
    descripcion: {type: String,required:true},
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Temas',temasSchema);


