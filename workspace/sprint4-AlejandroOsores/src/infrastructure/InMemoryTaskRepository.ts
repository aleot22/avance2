import { Taskid } from "../domain/Taskid";
import { TaskRepository } from "../domain/TaskRepository";
import { Task } from "../domain/Task";

export class InMemoryTaskRepository implements TaskRepository {
    private tasks: Task[] = [];

    async create(task: Task): Promise<void> {
        this.tasks.push(task);
    }
    async getAll(): Promise<Task[]> {
        return this.tasks;
    }

    async getOneById(id: Taskid): Promise<Task | null> {
        return this.tasks.find((task) => task.id.value == id.value) || null;
        
    }

    async edit(task: Task): Promise<void> {
        const index = this.tasks.findIndex((t) => t.id.value == task.id.value);
        this.tasks[index] = task;
    }
    async delete(id: Taskid): Promise<void> {
        this.tasks = this.tasks.filter((task) => task.id.value !== id.value);
        
    }
} 