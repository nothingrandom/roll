import test from 'ava';
import Roll from '../roll';

const roll = new Roll();

test('throws', (t) => {
  t.throws(() => {
    roll.roll('20+6');
  });

  t.throws(() => {
    roll.roll('');
  });
});

test('random average', (t) => {
  const avg = roll.roll('100000d20').average;
  t.assert(avg >= 10.41 && avg <= 10.59);
});

test('format parsed', (t) => {
  const parseTest = {
    expected: [
      { segment: '2d20', quantity: '2', sides: '20' },
      { segment: '3d6', quantity: '3', sides: '6' },
    ],
    parsed: roll.parse('2d20+3d6'),
  };

  t.deepEqual(parseTest.parsed, parseTest.expected);
});
