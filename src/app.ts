import bodyParser from 'body-parser';
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import { Database } from './database.js';
import { asyncHandler } from './utils.js';

const app = express();
app.use(bodyParser.json());

app.get(
  '/users',
  asyncHandler(async (req, res) => {
    const users = await Database.getUsers();

    res.json(users);
  }),
);

app.get(
  '/users/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await Database.getUser(id);

    if (!user) {
      res.status(404).send();
      return;
    } else {
      res.json(user);
    }
  }),
);

app.patch(
  '/users/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const user = await Database.updateUser(id, data);

    if (!user) {
      res.status(404).send("User with id:" + id + " not found");
    } else {
      res.json(user);
    }
  }),
);

app.get(
  '/users/search',
  asyncHandler(async (req, res) => {
    const e = req.query.email as string;
    const u = Database.searchByEmail(e);
    res.json(u);
  }),
);

app.use((e: unknown, req: Request, res: Response, next: NextFunction) => {
  let status: number = 500;

  res
    .status(status)
    .json({ error: e instanceof Error ? e.message : 'Unknown server error' });
});

export default app;
