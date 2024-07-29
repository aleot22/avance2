import { ServiceContainer } from "ContServicio/Infrastructure/ServiceContainer";
import { NextFunction, Request, Response } from "express";
import { TaskNotFoundError } from "../domain/TaskNotFoundError";

export class TaskController {
    async getAll(req: Request, res: Response, next:NextFunction) {
        const tasks = await ServiceContainer.task.getAll.run();
    
        return res.json(tasks).status(200);
      }

    async getOneById(req: Request, res: Response,next:NextFunction) {
        try {
            const task = await ServiceContainer.task.getOneById.run(req.params.id);
            return res.status(200).json(task);
        } catch (error) {
            if (error instanceof TaskNotFoundError) {
                return res.status(404).json({ message: error.message });
            }

        }
    }

    async create(req: Request, res: Response, next:NextFunction) {
        const { id, description, title, completed = false } = req.body;
        try {
            await ServiceContainer.task.create.run(id, title, completed, description);
            return res.status(201).send();
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async edit(req: Request, res: Response, next:NextFunction) {
        const { id, description, title, completed = false } = req.body;
        try {
            await ServiceContainer.task.edit.run(id, title, description,completed, );
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async delete(req: Request, res: Response, next:NextFunction) {
        try {
            await ServiceContainer.task.delete.run(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}