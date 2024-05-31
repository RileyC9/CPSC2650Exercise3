// Q5a.
function listApply (list, f) {
  for (let i = 0; i < list.length;i++) {
    list[i] = f(list[i]);
  }
  return list;
}

// Q5b.
const cadToUsd = (cad) => cad*0.73;

const cadToUsds = (list) => {
  return listApply(list, cadToUsd);
}

// Q5c.
const isOdd = (x) => (x % 2 === 1);

const every = (list,f) => {
  return list.reduce((accu,element) => {
    return accu && f(element);
  },true);
}

// Q5d.
function assert(value, message) {
  if (!value) {
    throw new Error(message || "Assertion failed");
  }
}

function assertEquals(actual, expected, message) {
  if (actual != expected) {
    throw new Error(message || `Expected ${expected}, but got ${actual}`);
  }
}

function assertListEquals(actual, expected, message) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new Error(message || `Expected both arguments to be arrays`);
  }
  if (actual.length !== expected.length) {
    throw new Error(
      message ||
        `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
    );
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(
        message ||
          `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
      );
    }
  }
}

// examples:
try {
  assertListEquals(
  listApply([1, 2, 3], (x) => x + 1),
  [2, 3, 4]
  );
} catch (e) {
  console.log(e);
}

try {
  assert(every([1, 3, 5], isOdd));
} catch (e) {
  console.log(e);
}

// Answers:
try {
  assertEquals(cadToUsd(1), 0.73);
} catch (e) {
  console.log(e);
}

try {
  assertListEquals(cadToUsds([1,2,3]), [0.73, 1.46, 2.19]);
} catch (e) {
  console.log(e);
}

try {
  assertListEquals(cadToUsds([1,2,4]), [0.73, 1.46, 2.19]);
} catch (e) {
  console.log(e);
}

try {
  assertListEquals(
  listApply([1, 2, 3], (x) => x + 1),
  [2, 3, 5]
  );
} catch (e) {
  console.log(e);
}

try {
  assertEquals(every([1, 3, 5], isOdd),true)
} catch (e) {
  console.log(e);
}