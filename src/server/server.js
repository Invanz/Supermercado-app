const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 4000;

// Configurar conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MysqlPassw',
  database: 'dbadminsw',
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Definir una ruta para obtener datos desde la base de datos
app.get('/api/categorias', (req, res) => {
  connection.query('SELECT * FROM categoria', (err, results) => {
    if (err) {
      console.error('Error al obtener datos desde la base de datos:', err);
      res.status(500).json({ error: 'Error al obtener datos' });
      return;
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});