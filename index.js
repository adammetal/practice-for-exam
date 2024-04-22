export function uniqueInOrder(iterable) {
  const arr = [...iterable];
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}

function code(char) {
  return char.charCodeAt(0);
}

export function findMissingLetter(iterable) {
  const arr = [...iterable];

  for (let i = 1; i < arr.length; i++) {
    if (code(arr[i]) - code(arr[i - 1]) === 2) {
      return String.fromCharCode(code(arr[i]) - 1)
    }
  }

  return null;
}

export function duplicateCount(str) {
  const lower = str.toLowerCase();
  const duplicates = new Set();
  const letters = [];

  for (const char of lower) {
    if (!letters.includes(char)) {
      letters.push(char);
    } else {
      duplicates.add(char);
    }
  }

  return duplicates.size;
}
