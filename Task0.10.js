function getSameLetters(string1, string2) {
const commonCharacters = "";
  let sameLetter = "CommonLetters:";
  for (let i = 0; i < string1.length; i++) {
    if (sameLetter.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        sameLetter += string1[i];
      }
    }
  }
  return sameLetter;
};

console.log(getSameLetters());
