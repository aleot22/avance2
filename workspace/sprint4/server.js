const express = require('express');
const app = express();
const tareasRoutes = require('./routes/tareasRoutes');
const PORT = 3000;

app.use(express.json());

app.use('/api/tareas', tareasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});