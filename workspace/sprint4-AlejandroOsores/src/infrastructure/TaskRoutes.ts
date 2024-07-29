import express from "express";
import workoutController from "./TaskController";

const router = express.Router();

router
   .get("/", workoutController.getAllWorkouts)
   .get("/:workoutId", workoutController.getOneWorkout)
   .post("/:workoutId", workoutController.createNewWorkout)
   .patch("/:workoutId", workoutController.updateOneWorkout)
   .delete("/:workoutId", workoutController.deleteOneWorkout)

   export default  {router} ;
