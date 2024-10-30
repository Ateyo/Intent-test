import type { NextFunction, Request, Response } from 'express';

export const delay = (wait: number) => new Promise((r) => setTimeout(r, wait));

export const random = (min: number = 0, max: number = 100) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
