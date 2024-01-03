const getCount = (str) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      count++
    }
  }
  return count
}

console.log(getCount('laura'))
console.log(getCount('chai'))


// ----------------------------------------


const getVowels = str => {
  return str.split('').filter(c => 'aeiou'.includes(c)).length
}

console.log(getVowels('jack'))