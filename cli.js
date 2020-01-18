#!/usr/bin/env node
const meow = require('meow');
const Roll = require('./roll');

const cli = meow(`
  Usage
  $ roll <dice to roll>

  Example
  $ roll d20 # rolls one die with 20 sides
  1 - 20

  $ roll 2d20 # rolls two dice with 20 sides each
  2 - 40

  $ roll 2d20+d3 # rolls two dice with 20 sides and one die with 3 sides
  3 - 43
`);

const roll = new Roll();

if (cli.input.length === 0) {
  console.error('Please specify a dice to roll.');
  process.exit(1);
}

try {
  const rolled = roll.roll(cli.input[0]);
  console.log(`Result: ${rolled.result}`);
  if (rolled.rolled.length > 1) {
    console.log(`Each die: ${rolled.rolled}`);
  }
  process.exit(0);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
