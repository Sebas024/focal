function getRandom() {
  return Math.random();
}let temp;
const diceRoller = function(number) {
  let dice = [];
  for (let i = 0; i < number; i++) {
    dice[i] =  Math.floor(Math.random(i) * 6);
  }
  return dice;
};

for (let j = 0; j < process.argv.length; j++) {
  temp = diceRoller(process.argv[j]);
//console.log(j + ' -> ' + (process.argv[j]));
}
console.log(`Roller ${process.argv[2]} dice:` + temp);