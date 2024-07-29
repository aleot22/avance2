import { Task } from "./Task";
import { Taskid } from "./Taskid";

export interface TaskRepository {
    create(task: Task): Promise<void>;
    getAll(): Promise<Task[]>;
    getOneById(id: Taskid): Promise<Task | null>;
    edit(task: Task): Promise<void>;
    delete(id: Taskid ): Promise<void>;

}