export class Taskid {
    value:string;

    constructor(value: string){
        this.value = value;
        this.ensureisValid();
    }
    private ensureisValid() {
        if (this.value.length < 10){
            throw new Error("Taskid must be at least 10 characters")
        }

    }

}