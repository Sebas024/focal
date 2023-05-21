let sum = 0;
let x = 0;
for (let j = 2; j < process.argv.length; j++) {
  x = Number(process.argv[j]);
  sum = sum + x;
}
console.log(sum);