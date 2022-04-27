function getVowels(name)
{
    let numArray = Array.from(name.toLowerCase());
    let count = 0;
    let output = "Vowels : ";
    for (i = 0; i < name.length; i++)
    {
        if (numArray[i] == 'a' || numArray[i] == 'e' || numArray[i] == 'i'
                || numArray[i] == 'o' || numArray[i] == 'u')
        {
             output += numArray[i] +",";
            count++;
        }
    }
    return output;
}

console.log(getVowels());
