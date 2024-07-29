export class TaskCompleted {
    value:boolean;

    constructor(value: boolean){
        this.value = value;
        this.ensureisValid();
    }
    private ensureisValid() {
        if (typeof this.value !== "boolean"){
            throw new Error("TaskCompleted must be a boolean value")
        }

    }

}