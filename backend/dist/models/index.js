"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Task = exports.Project = void 0;
const database_1 = __importDefault(require("../config/database"));
const project_1 = __importDefault(require("./project"));
exports.Project = project_1.default;
const task_1 = __importDefault(require("./task"));
exports.Task = task_1.default;
const user_1 = __importDefault(require("./user"));
exports.User = user_1.default;
database_1.default.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
});
