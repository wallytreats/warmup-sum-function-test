function countVowels (str){
  if(typeof str != "string"){
    return 'please enter a string'
  }
  let vowels = ['a', 'e', 'i', 'o', 'u']
  str = str.toLowerCase();
  let count = 0;
  str.split('').map((e)=>{(vowels.includes(e))? count++ : count});
  return count
}

module.exports = countVowels
