import { Taskid } from "./Taskid";
import { Tasktitle } from "./Tasktitle";
import { Taskdescription } from "./TaskDescription";
import { TaskCompleted } from "./TaskCompleted";

export class Task {
  id:Taskid;
  title: Tasktitle;
  description: Taskdescription;
  completed: TaskCompleted;

    constructor(  id: Taskid,  title: Tasktitle,  description: Taskdescription,  completed: TaskCompleted) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = completed;
    }
  }

  