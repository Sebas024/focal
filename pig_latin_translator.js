let temp;
let str = "";
const pigLatin = function (str) {
    let result = "";
    
    for (let i = 1;  str.length > i; i++) {
        result += str[i];
    }
    result = result + str[0] + "ay";
    return result;
}
for (let j = 2; j < process.argv.length; j++) {
    temp = pigLatin(process.argv[j]);
    str += `${temp} `;
}
    console.log(str);