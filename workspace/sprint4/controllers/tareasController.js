
exports.agregarTarea = (req, res) => {
    const nuevaTarea = req.body;
    res.status(201).send('Tarea añadida correctamente');
  };
  
  exports.marcarTareaCompletada = (req, res) => {
    const tareaId = req.params.id;
    res.send('Tarea marcada como completada correctamente');
  };
  
  exports.eliminarTarea = (req, res) => {
    const tareaId = req.params.id;
    res.send('Tarea eliminada correctamente');
  };
  
  const listaTareas = [
    { id: 1, nombre: "Comprar leche", descripcion: "Ir al supermercado y comprar leche" },
    { id: 2, nombre: "Hacer ejercicio", descripcion: "Salir a correr durante 30 minutos" }
  ];
  
  exports.mostrarTareas = (req, res) => {
    res.json(listaTareas);
  };