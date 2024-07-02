import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (allowedRoles: string | string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = req.user; // Simulate user from request
    if (!allowedRoles.includes(user.userType)) {
      res.status(403).json({ error: 'Forbidden' });
    } else {
      next();
    }
  };
};
