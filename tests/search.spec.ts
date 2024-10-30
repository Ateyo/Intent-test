import { test } from '@japa/runner';
import { Database } from '../src/database.js';

test.group('Database.searchByEmail', () => {
  test('returns a user when the email is found', async ({ expect }) => {
    await Database.loadUsers(10);
    const email = (await Database.getUser('2')).email;
    const user = await Database.searchByEmail(email);
    expect(user).toBeDefined();
    expect(user!.email).toBe(email);
  });

  test('returns null when the email is not found', async ({ expect }) => {
    await Database.loadUsers(10);
    const email = 'non-existent-email@example.com';
    const user = await Database.searchByEmail(email);
    expect(user).toBeNull();
  });

  test('returns null when the input email is empty', async ({ expect }) => {
    await Database.loadUsers(10);
    const email = '';
    const user = await Database.searchByEmail(email);
    expect(user).toBeNull();
  });

  test('returns null when the input email is null', async ({ expect }) => {
    await Database.loadUsers(10);
    const email = null;
    const user = await Database.searchByEmail(email);
    expect(user).toBeNull();
  });
});
