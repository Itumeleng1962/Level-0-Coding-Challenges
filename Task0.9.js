function getVowels(name) {
  const vowels = ["a", "e", "i", "o", "u"];

  name = name.toLowerCase();
  let holdVowels = [];
  let output = "Vowels: ";

  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (name[i] === vowels[j]) {
        holdVowels.push(vowels[j]);

        for (let i = 0; i < holdVowels.length; i++) {
          let countVowels = 0;
          for (let j = 0; j < holdVowels.length; j++) {
            if (holdVowels[i] == holdVowels[j]) {
              countVowels++;
            }
            if (countVowels > 1) {
              holdVowels.splice(j, 1);
              j = j + 1;
            }
            
          }
         
        }
        
      }
    }
    
  }

  for (let i = 0; i < holdVowels.length; i++) {
    output += holdVowels[i];
    if (i < holdVowels.length - 1) output += ", ";
  }
  console.log(output);

}
getVowels("Reneeeee")
