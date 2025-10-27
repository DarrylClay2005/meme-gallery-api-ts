import type { Request, Response, NextFunction } from 'express';

// Minimal mock auth to attach a user for demo/testing
export function mockAuth(req: Request, _res: Response, next: NextFunction) {
  // In a real app, you'd verify a token/session and set the actual user ID
  // For now, attach a deterministic user object
  (req as any).user = { userId: '1' };
  next();
}
