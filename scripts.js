// FILL IN THE FUNCTIONS BELOW

function removeNonAlphaChars(sentence) {
  var array = sentence.split('');
  var result = [];
  array.forEach(function(element){
   if ( (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) || (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) || element === ' ') {
     result.push(element);
   }
  });
  return result.join('');
}

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    // set a variable called max equal to the first element of the array
    // iterate through array and check each element with max, if element>max, then set max=element
    // once you reach end of the array, return max
    var max = array[0];
    array.forEach(function(element){
      if (element > max) {
        max = element;
      }
    });
    return max;
  },

  reversed: function(str){
    // your code here
    // split given string into characters in an array
    // reverse the array
    // join the characters and return the result
    var strArray = str.split('');
    var revArray = strArray.reverse();
    return revArray.join('');
  },

  loudSnakeCase: function(sentence) {

   var result = [];
   var charOnly = removeNonAlphaChars(sentence);
   var words = charOnly.toLowerCase().split(' ');

   words.forEach(function(word){
     if (word[0] !== '') {
       var temp = word[0].toUpperCase() + word.slice(1);
       result.push(temp);
     }
   });

   return result.join('_')

  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    // check to see if arrays are of equal length
    // if yes, iterate through each element of one array and compare it to other array,
      // if all elements of both arrays are equal, then arrays are equal, return true; if any element is not equal, return false
    // if arrays are of unequal lengths return false

    if(array1.length !== array2.length) {
      return false;
    }
    var result = true;
    array1.forEach(function(element, index){
      if (element !== array2[index]) {
        result = false;
      }
    });
    return result;
  },

  fizzBuzz: function(num){
    // your code here
    // input is a number
    // output is an array from 1 to that number (any number divisible by 3 is replaced by 'FIZZ', any element divisible by 5 is
    // replaced with 'BUZZ' and any element divisible by 3 and 5 is replaced by 'FIZZBUZZ'

    // iterate through a loop starting from 1 to the input number
    // if number is divisible by 3, add 'FIZZ' to array
    // if number is divisible by 3, add 'BUZZ' to array
    // if number is divisible by 3 and 5, add 'FIZZBUZZ' to array
    // else add number to array
    // return array

    var result = [];
    for (var i=1; i<=num; i++) {
      if (i % 15 === 0) {
        result.push('FIZZBUZZ');
      } else if (i % 3 === 0) {
        result.push('FIZZ');
      } else if (i % 5 === 0) {
        result.push('BUZZ');
      } else {
        result.push(i);
      }
    }
    return result;

  },

  myMap: function(array, func){
    // your code here
    // initialize an empty array to hold the result
    // for each element of the input array, run the input function and add the result to the result array
    // return result array
    var result = [];
    array.forEach(function(element){
      result.push(func(element));
    });
    return result;
  },

  primes: function(num){
    // your code here
    // initialize result to empty array
    // if num<2, return empty array
    // otherwise iterate from 2 to input number
    // check if each number is prime, if it is add it to the result array
    // go to next number and keep adding primes
    // return result array

    var result = [];
    for (var i=2; i<num; i++) {
      // check if number is prime
      var flag = 0;
      for (var j=2; j<i; j++) {
        if(i%j === 0) {
          flag = 1;
        }
      }
      if (flag === 0) {
        result.push(i);
      }
    }

    return result;

  },
}