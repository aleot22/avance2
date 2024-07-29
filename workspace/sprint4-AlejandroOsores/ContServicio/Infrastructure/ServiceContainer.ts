import { TaskGetAll } from "../../src/application/TaskGetAll/TaskGetAll";
import { TaskGetOneByid } from "../../src/application/TaskGetOneByid/TaskGetOneByid";
import { Taskcreate } from "../../src/application/Taskcreate/Taskcreate";
import { TaskDelete} from "../../src/application/Taskdelete/Taskdelete";
import { Taskedit } from "../../src/application/Taskedit/Taskedit";
import { InMemoryTaskRepository } from "../../src/infrastructure/InMemoryTaskRepository";

const taskRepository = new InMemoryTaskRepository
export const ServiceContainer = {
    task: {
        getAll: new TaskGetAll(taskRepository),
        getOneById: new TaskGetOneByid(taskRepository),
        create: new Taskcreate(taskRepository),
        edit: new Taskedit(taskRepository),
        delete: new TaskDelete(taskRepository),

    }
}