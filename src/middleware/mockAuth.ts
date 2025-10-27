import type { Request, Response, NextFunction } from 'express';

export function mockAuth(req: Request, _res: Response, next: NextFunction) {
  (req as any).user = { userId: '1' };
  next();
}
