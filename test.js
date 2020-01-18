import test from 'ava';
import Roll from './roll';

const roll = new Roll();

test('regex passes', (t) => {
  t.regex('d20', Roll.Regex);
  t.regex('2d20', Roll.Regex);
  t.regex('d20+3d6', Roll.Regex);
  t.regex('2d20+3d6', Roll.Regex);
});

test('regex fails', (t) => {
  t.notRegex('', Roll.Regex);
  t.notRegex(' ', Roll.Regex);
  t.notRegex('220', Roll.Regex);
  t.notRegex('20+6', Roll.Regex);
  t.notRegex('20+d6', Roll.Regex);
});

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
  const expectedFormat = [
    { segment: '2d20', quantity: '2', sides: '20' },
    { segment: '3d6', quantity: '3', sides: '6' },
  ];

  const parsedResult = roll.parse('2d20+3d6');

  t.deepEqual(parsedResult, expectedFormat);
});

