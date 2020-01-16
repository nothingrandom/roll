#!/usr/bin/env node
const meow = require('meow');
const roll = require('./roll');

const cli = meow(`
  Usage
  $ roll <dice to roll>

  Example
  $ roll d20
  10
`);

if (cli.input.length === 0) {
  console.error('Please specify a dice to roll');
  process.exit(1);
}

roll(cli.input[0]).then(console.log);
