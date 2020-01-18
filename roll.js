const regex = /^(\d*)d(\d+|%)(([+-/*bw])(\d+))?(([+-/*])(\d+|(\d*)d(\d+|%)(([+\-/*bw])(\d+))?))*$/;
const min = 1; // minimum number of sides on a dice

class roll {
  constructor(random) {
    this.random = random || Math.random.bind(Math);
  }

  validate(s) {
    this.validation = regex.test(s);
    return this.validation;
  }

  parse(s) {
    if (!this.validate(s)) {
      throw new Error(`${s} is an invalid dice roll!`);
    }

    const dice = [];
    const segments = s.split(/[+-]/);

    segments.forEach((segment) => {
      const match = regex.exec(segment);

      dice.push({
        segment,
        quantity: match[1] || 1,
        sides: match[2],
      });
    });

    return dice;
  }

  roll(input) {
    const dice = this.parse(input);
    const rolled = [];

    dice.forEach((diceSet) => {
      const diceSetRolled = [];
      while (diceSetRolled.length < diceSet.quantity) {
        diceSetRolled.push((Math.floor(this.random() * (diceSet.sides - min + 1)) + min));
      }
      rolled.push(...diceSetRolled);
    });

    const reducer = (acc, cur) => acc + cur;
    const result = rolled.reduce(reducer);
    const average = result / rolled.length;

    return {
      rolled,
      average,
      result,
    };
  }
}

module.exports = roll;
module.exports.Regex = regex;
