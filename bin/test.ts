import { apiClient } from '@japa/api-client';
import { expect } from '@japa/expect';
import { expectTypeOf } from '@japa/expect-type';
import { configure, processCLIArgs, run } from '@japa/runner';

process.env.NODE_ENV = 'test';

processCLIArgs(process.argv.splice(2));
configure({
  files: ['tests/**/*.spec.ts'],
  plugins: [expect(), apiClient('http://localhost:3333'), expectTypeOf()],
  timeout: 10_000,
});

run();
