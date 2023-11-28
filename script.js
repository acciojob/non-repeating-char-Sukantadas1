function firstNonRepeatedChar(str) {
 // Create a map to store the frequency of each character in the string
  const charFrequency = new Map();

  // Iterate through the string and update the character frequency map
  for (const char of str) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  // Find the first non-repeated character in the string
  for (const char of str) {
    if (charFrequency.get(char) === 1) {
      return char;
    }
  }

  // Return null if no non-repeated character is found
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
