const roll = async (input) => {
  const diceNum = input.substr(1);
  return Math.round(Math.random() * diceNum);
};

module.exports = roll;