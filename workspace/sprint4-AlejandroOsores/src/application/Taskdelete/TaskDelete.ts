import { TaskRepository } from "../../domain/TaskRepository";
import { Taskid } from "../../domain/Taskid";

export class TaskDelete {
    constructor(private repository: TaskRepository) {}

    async run(id: string): Promise<void>{
        await this.repository.delete(new Taskid(id));
    }
}