const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Servir archivos estáticos (CSS, JS, imágenes, etc.) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});