import test from 'ava';
import Roll from '../roll';

test('pass single', (t) => {
  t.regex('d20', Roll.Regex);
});

test('pass double', (t) => {
  t.regex('2d20', Roll.Regex);
});

test('pass mixed', (t) => {
  t.regex('d20+3d6', Roll.Regex);
});

test('pass mixed double', (t) => {
  t.regex('2d20+3d6', Roll.Regex);
});

test('fail empty', (t) => {
  t.notRegex('', Roll.Regex);
});

test('fail blank', (t) => {
  t.notRegex(' ', Roll.Regex);
});

test('fail numbers', (t) => {
  t.notRegex('220', Roll.Regex);
});

test('fail numbers plus', (t) => {
  t.notRegex('20+6', Roll.Regex);
});

test('fail mixed', (t) => {
  t.notRegex('20+d6', Roll.Regex);
});

test('fail order', (t) => {
  t.notRegex('20d', Roll.Regex);
});
