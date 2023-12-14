/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) 
{
  var vowels=["a","e","i","o","u"];
      var count =0 ;
      str=str.toLowerCase().split('')
      for(let i=0;i<str.length;i++)
        {
            for(let x=0;x<vowels.length;x++)
            {
              if(str[i]==vowels[x]) {count=count+1}
            
            }
        }
      
return count
}

module.exports = countVowels;