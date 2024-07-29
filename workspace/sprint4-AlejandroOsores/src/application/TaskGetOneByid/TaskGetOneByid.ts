import { TaskNotFoundError } from "../../domain/TaskNotFoundError";
import { TaskRepository } from "../../domain/TaskRepository";
import { Taskid } from "../../domain/Taskid";
import { Task } from "../../domain/task";

export class TaskGetOneByid {
    constructor(private repository: TaskRepository) {}

    async run(id: string): Promise<Task> {
        const task = await this.repository.getOneById(new Taskid(id));

        if (!task) throw new TaskNotFoundError("Task not found");

        return task;
    }
}