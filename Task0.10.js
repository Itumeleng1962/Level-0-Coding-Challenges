function getSameLetters(string1, string2) {
    let commonLetters = [];
    for (let i = 0; i < string2.length; i++) {
      for (let j = 0; j < string1.length; j++) {
        if (string1[j].toLowerCase() === string2[i].toLowerCase()) {
          commonLetters.push(string1[j].toLowerCase());
        }
      }
    }
    commonLetters = [...new Set(commonLetters)];
  
    let sameLetters = "Common letters: ";
    for (let i = 0; i < commonLetters.length; i++) {
      sameLetters += commonLetters[i];
      if (i < commonLetters.length - 1) sameLetters += ", ";
    }
  
    console.log(sameLetters);
  }

getSameLetters("computer","house"); 
