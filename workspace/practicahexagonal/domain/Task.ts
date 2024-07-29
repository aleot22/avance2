import { Taskid } from "./Taskid";
import { Tasktitle } from "./Tasktitle";
import { Taskdescription } from "./Taskdescription";

export class Task {
  id:Taskid;
  title: Tasktitle;
  description: Taskdescription;
  completed:boolean = false;

    constructor(  id: Taskid,  title: Tasktitle,  description: Taskdescription,  completed: boolean = false) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = completed;
    }
  }

  