import { TaskRepository } from "../../domain/TaskRepository";
import { Task } from "../../domain/task";

export class TaskGetAll {
    constructor(private repository: TaskRepository) {}
    
    async run(): Promise<Task[]> {
        return this.repository.getAll();
    }


}