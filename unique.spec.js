import assert from 'node:assert';
import test from 'node:test';
import { uniqueInOrder } from './index.js';

test("test", () => {
  assert.deepEqual(
    uniqueInOrder('AAAABBBCCDAABBB'),
    ['A','B','C','D','A','B']
  )
});

test("test2", () => {
  assert.deepEqual(
    uniqueInOrder('A  A BB CC'),
    ['A',' ','A',' ','B',' ','C']
  )
})
