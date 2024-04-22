import test from 'node:test';
import assert from 'node:assert';
import { duplicateCount } from './index.js';

test("test", () => {
  assert.strictEqual(duplicateCount(""), 0);
  assert.strictEqual(duplicateCount("abcde"), 0);
  assert.strictEqual(duplicateCount("aabbcde"), 2);
  assert.strictEqual(duplicateCount("aabBcde"), 2);
  assert.strictEqual(duplicateCount("Indivisibility"), 1);
  assert.strictEqual(duplicateCount("Indivisibilities"), 2);
});
