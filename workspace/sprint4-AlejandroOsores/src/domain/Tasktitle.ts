export class Tasktitle {
    value:string;

    constructor(value: string){
        this.value = value;
        this.ensureisValid();
    }
    private ensureisValid() {
        if (this.value.length < 15){
            throw new Error("Tasktitlemust be at least 15 characters")
        }

    }

}