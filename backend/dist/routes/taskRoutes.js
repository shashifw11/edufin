"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.post('/tasks', (0, authMiddleware_1.authMiddleware)('Manager'), taskController_1.createTask);
router.put('/tasks/status', (0, authMiddleware_1.authMiddleware)(['Manager', 'Developer']), taskController_1.updateTaskStatus);
exports.default = router;
