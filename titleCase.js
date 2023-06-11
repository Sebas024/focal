const titleCase  = function(text) {
  text = text.toLowerCase().split(' ');

  for (let index = 0; index < text.length; index++) {
    text[index] = text[index].charAt(0).toUpperCase() + text[index].slice(1);
  }
  return text.join(' ');

};
titleCase('');
console.log(titleCase("What are we doing here?"));