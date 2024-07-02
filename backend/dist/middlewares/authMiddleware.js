"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const user = req.user; // Simulate user from request
        if (!allowedRoles.includes(user.userType)) {
            res.status(403).json({ error: 'Forbidden' });
        }
        else {
            next();
        }
    };
};
exports.authMiddleware = authMiddleware;
