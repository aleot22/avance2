import  Express, { Router }  from "express";
import { NextFunction, Request, Response } from "express";
import TaskRoutes from "./infrastructure/TaskRoutes";



const app = Express();

app.use(TaskRoutes); 

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        console.error(err.stack);
        return res.status(500).send(err.message);
    }
    console.error(err);
    return res.status(500).send("Something is broke!");
});

app.listen(6000, () => {
    console.log("Server is running on 6000");
});


