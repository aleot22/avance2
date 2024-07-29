import { Taskid } from "./Taskid";
import { Tasktitle } from "./Tasktitle";
import { Taskdescription } from "./TaskDescription";

export class Task {
  id:Taskid;
  title: Tasktitle;
  description: Taskdescription;
  completed:string;

    constructor(  id: Taskid,  title: Tasktitle,  description: Taskdescription,  completed: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = completed;
    }
  }

  