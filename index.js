const express = require('express');
const mysql = require('mysql2');
const path = require('path');

// require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const connection = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'hKNItKJZqcYdrytxZILfFrISBiRsfpUD',
  database: 'railway',
  port: '14000'
});

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/enviar', (req, res) => {
    const { nombre, correo } = req.body;

    const insertarRegistro = 'insert into registros (nombre, correo) values (?, ?)';
    conexion.query(insertarRegistro, [nombre, correo], (err, result) =>{
        if (err) {
            console.error('Error al insertar: ', err);
            res.status(500).send('Error al guardar usuario');
            return;
        }
        res.redirect('html/menu.html');
    });
});

app.post('/comentario', (req, res) => {
    const comentario = req.body.comentario;
    const insertarComentario = 'insert into comentarios (comentario) values (?)';
    conexion.query(insertarComentario, [comentario], (err, result) => {
        if (err) {
            console.error('Error al insertar: ', err);
            res.status(500).send('Error al guardar comentario');
            return;
        }
        res.redirect('/');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
