'use strict';

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

$ node processargv.js tom jack 43

$ node processargv.js tom jack 43
0 -> /Users/scott/.nvm/versions/node/v4.8.0/bin/node
1 -> /Users/scott/javascript/processargv.js
2 -> tom
3 -> jack
4 -> 43

'use strict';

const args = require('minimist')(process.argv.slice(2));

console.log(args);
console.log(args.i);