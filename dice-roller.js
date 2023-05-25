const diceRoller = function(totalDice) {
  let result = [];
  for (let i = 0; i < totalDice; i++) {
    let diceResult = Math.floor(Math.random() * 6) + 1;
    result.push(diceResult);


  }
  return (result.join());
};

console.log(diceRoller(1));