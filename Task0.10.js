function commmonCharacters(str1, str2) {
  let saveCommonCharacters = [];
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1[j].toLowerCase() === str2[i].toLowerCase()) {
        saveCommonCharacters.push(str1[j].toLowerCase());
      }
    }
  }
  saveCommonCharacters = [...new Set(saveCommonCharacters)];
  let commmonCharacters = "Common letters: ";
  for (let i = 0; i < saveCommonCharacters.length; i++) {
    commmonCharacters += saveCommonCharacters[i];
    if (i < saveCommonCharacters.length - 1) commmonCharacters += ", ";
  }
  console.log(commmonCharacters);
}
commmonCharacters("House","computers")
