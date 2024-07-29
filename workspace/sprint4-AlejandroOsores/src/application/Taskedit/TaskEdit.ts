import { TaskRepository } from "../../domain/TaskRepository";
import { Taskdescription } from "../../domain/TaskDescription";
import { Taskid } from "../../domain/Taskid";
import { Tasktitle } from "../../domain/Tasktitle";
import { Task } from "../../domain/Task";
import { TaskCompleted } from "../../domain/TaskCompleted";

export class Taskedit {
    constructor(private repository: TaskRepository) {}

    async run(
        id: string,  
        title: string,  
        description: string,  
        completed: boolean
        ): Promise<void> {
       const task = new Task(
        new Taskid(id),
        new Tasktitle(title),
        new Taskdescription(description),
        new TaskCompleted(completed)
       );

    return this.repository.edit(task)
}
} 