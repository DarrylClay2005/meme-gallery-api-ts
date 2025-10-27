declare namespace Express {
  interface UserPayload {
    userId: string;
  }
  export interface Request {
    user?: UserPayload;
  }
}
