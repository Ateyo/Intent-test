import { test } from '@japa/runner';
import { Database } from '../src/database.js';
import App from './../src/app.js';

test.group('List users', (group) => {
  group.setup(async () => {
    await Database.loadUsers(10);
    const server = App.listen(3333);

    return () => {
      server.close();
    };
  });
  test('it should get the whole list of users', async ({ expect, client }) => {
    const res = await client.get('/users');
    const data = res.body();

    expect(data.length).toBe(10);
  });
});
