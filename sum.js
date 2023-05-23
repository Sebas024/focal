let args = process.argv;
// console.log(args);
// console.log(args.slice(2));

args = args.slice(2);
console.log(Number(args[0]) + Number(args[1]));