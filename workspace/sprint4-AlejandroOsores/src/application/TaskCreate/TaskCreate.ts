import { TaskRepository } from "../../domain/TaskRepository";
import { Taskdescription } from "../../domain/TaskDescription";
import { Taskid } from "../../domain/Taskid";
import { Tasktitle } from "../../domain/Tasktitle";
import { Task } from "../../domain/task";
import { TaskCompleted } from "../../domain/TaskCompleted";

export class Taskcreate{
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
       return this.repository.create(task);
    }

}