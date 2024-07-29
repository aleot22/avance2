import express, { Router } from "express";
import {TaskController} from "./TaskController";

const controller = new TaskController;

const TaskRoutes = Router();

//mapeo de que rutas debe ejecutar cada caso de nuestro controlador
TaskRoutes.get("/task/", controller.getAll);
TaskRoutes.get("/task/:id/", controller.getOneById);
TaskRoutes.post("/:task", controller.create);
TaskRoutes.put("/:task", controller.edit);
TaskRoutes.delete("/:task", controller.delete);

export default  TaskRoutes;
