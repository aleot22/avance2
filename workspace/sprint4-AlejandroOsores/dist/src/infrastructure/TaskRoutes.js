"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = __importDefault(require("./TaskController"));
const router = express_1.default.Router();
router
    .get("/", TaskController_1.default.getAllWorkouts)
    .get("/:workoutId", TaskController_1.default.getOneWorkout)
    .post("/:workoutId", TaskController_1.default.createNewWorkout)
    .patch("/:workoutId", TaskController_1.default.updateOneWorkout)
    .delete("/:workoutId", TaskController_1.default.deleteOneWorkout);
exports.default = { router };
