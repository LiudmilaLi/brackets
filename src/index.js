module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 === 1) { 
        return false; }
            
    const brackets = [];
    for (const elem of bracketsConfig) {
       if (elem[0] !== elem[1]) {
        brackets[elem[0]] = elem[1];
        } else { brackets[elem[0]] = ' '; }
    }
    const string = []; 
    for (let i = 0; i < str.length; i++) {
        const currentElem = str[i];
        if (brackets[currentElem]) {
          if (brackets[currentElem] !== ' ' || string[string.length - 1] !== currentElem) {
          string.push(currentElem); 
        } else { 
          string.pop(); }
          continue;
      }
      if (brackets[string[string.length - 1]] === currentElem) {
        string.pop(); 
        } else { 
          return false; }
    }
  return string.length === 0;
    }
