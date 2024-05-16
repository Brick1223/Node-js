const express = require('express');
const path = require ('path');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3305',
  user: 'root',
  password: '',
  database: 'proyectoDB'
});

// Conexión a la base de datos MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos MySQL: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL con el ID ' + connection.threadId);
});

// Rutas para servir los archivos HTML
app.get('/Pagina_Web', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'Pagina_Web.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
});

app.get('/Gestion_de_produccion', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'Gestion_de_produccion.html'));
});

app.get('/Contabilidad', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'Contabilidad.html'));
});

app.get('/Servicio_al_cliente', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'Servicio_al_cliente.html'));
});

app.get('/Registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'Registro.html'));
});

app.get('/Olvido_contrasena', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'Olvido_contrasena.html'));
});

app.get('/Inicio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'Inicio.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
