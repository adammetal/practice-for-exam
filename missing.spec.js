import assert from 'node:assert';
import test from 'node:test';
import { findMissingLetter } from './index.js';

test("exampleTests", function(){
  assert.strictEqual(
    findMissingLetter(['a','b','c','d','f']),
    'e'
  );
  
  assert.strictEqual(
    findMissingLetter(['O','Q','R','S']),
    'P'
  );
});
