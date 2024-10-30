import { test } from '@japa/runner';
import { Database } from '../src/database.js';
import App from './../src/app.js';

test.group('update user', (group) => {
  group.setup(async () => {
    await Database.loadUsers(10);
    const server = App.listen(3333);

    return () => {
      server.close();
    };
  });
  test('it should update the given user', async ({ expect, client }) => {
    const res = await client
      .patch('/users/2')
      .json({ email: 'toto@mail.test', firstName: 'toto', lastName: 'Zozor' });

    const returnedData = res.body();
    const updatedUser = (await client.get('/users/2')).body();

    expect(updatedUser).toBeDefined();
    expect(returnedData).toEqual({
      id: '2',
      email: 'toto@mail.test',
      firstName: 'toto',
      lastName: 'Zozor',
    });

    expect(returnedData).toEqual(updatedUser);
  });
});
