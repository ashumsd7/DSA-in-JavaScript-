const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let freqObj1 = {};
  let freqObj2 = {};

  for (let char of str1.split("")) {
    freqObj1[char] = (freqObj1[char] || 0) + 1;
  }

  for (let char of str2.split("")) {
    freqObj2[char] = (freqObj2[char] || 0) + 1;
  }

  for (let item of str1.split("")) {
    if (freqObj1[item] !== freqObj2[item]) return false;
  }

  return true;
};

console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("querty", "qeywrt"));
console.log(validAnagram(" ", " "));
console.log(validAnagram("texttwisttime", "timetwisttext"));
