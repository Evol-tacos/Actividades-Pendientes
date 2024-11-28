const express = require('express');
const mongo = require('mongoose');

//Crear aplicacion express
const app = express();
const port = 3000;

//Middleware para permitir el uso de JSON
app.use(express.json());

//conexion a la base de datos
mongo.connect("mongodb://localhost:27017//studentsDb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Conectado a MongoDB'))
    .catch(err =>console.log('No se pudo conectar a MongoDB',err));

//Definir el esquema y modelo de estudiante
const studentSchema = new mongo.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    grade: {type: String, required: true}
});

const Student = mongo.model('students', studentSchema);

//rutas para la api

//obtener todos los estudiantes
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.send(students);
    } catch (err){
        res.status(500).send({message: 'Error al obtener estudiantes', error: err});
    }
});

//obtener un estudiante por ID
app.get('/api/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if(!student) return res.status(404).send({message: 'Estudiante no encontrado'});
        res.send(student);
    } catch (err){
        res.status(500).send({message: 'Error al obtener estudiante', error: err});
    }
});

//Actualizar un estudiante existente
app.put('/api/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            age: req.body.age,
            grade: req.body.grade
        },{new: true});
        
        if(!student) return res.status(404).send({message: 'Estudiante no encontrado'});
        res.send(student);
    } catch (err){
        res.status(500).send({message: 'Error al actualizar estudiante', error: err});
    }
});

//Eliminar un estudiante
app.delete('/api/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndRemove(req.params.id);
        if(!student) return res.status(404).send({message: 'Estudiante no encontrado'});
        res.send({message: 'Estudiante eliminado con exito'});
    } catch (err){
        res.status(500).send({message: 'Error al eliminar estudiante', error: err});
    }
});

//Aqui se escucara el puerto por el cual se usara la API
app.listen(port, () => {
    console.log(`API ejecutandose en http://localhost:${port}`);
});