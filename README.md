# roll
![Travis (.com)](https://img.shields.io/travis/com/nothingrandom/roll)
> A dice roller / random number generator

## Install

``` bash
$ yarn global add @nothingrandom/roll
$ npm install --global @nothingrandom/roll
```


## Usage (CLI)

``` bash
$ roll --help

  Usage
    $ roll <dice to roll>

  Example
    $ roll d20 # rolls one die with 20 sides
    1 - 20

    $ roll 2d20 # rolls two dice with 20 sides each
    2 - 40

    $ roll 2d20+d3 # rolls two dice with 20 sides and one die with 3 sides
    3 - 43
```

## Usage (require in JS)
``` js
const Roll = require('@nothingrandom/roll');
const roll = new Roll();

roll.roll('2d20').result;

// roll.roll(INPUT) will return
// {
//   rolled: number,
//   average: number[],
//   result: number,
// }
```

## License
MIT © [Benjamin Grant](https://nothingrandom.com)