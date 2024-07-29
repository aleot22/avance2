export class Taskdescription {
    value:string;

    constructor(value: string){
        this.value = value;
        this.ensureisValid();
    }
    private ensureisValid() {
        if (this.value.length < 20){
            throw new Error("Taskdescription be at least 20 characters")
        }

    }

}