"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database")); // Adjust path as per your directory structure
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3000; // Example port number
const app = (0, express_1.default)();
database_1.default.authenticate()
    .then(() => {
    console.log('Database connected...');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});
