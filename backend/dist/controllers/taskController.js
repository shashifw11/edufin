"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskStatus = exports.createTask = void 0;
const models_1 = require("../models");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield models_1.Task.create(req.body);
        res.status(201).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createTask = createTask;
const updateTaskStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, status } = req.body;
        const task = yield models_1.Task.findByPk(id);
        if (!task)
            return res.status(404).json({ error: 'Task not found' });
        task.status = status;
        yield task.save();
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateTaskStatus = updateTaskStatus;
