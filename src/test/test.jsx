import React from 'react';

const Test = () =>{
    const fruits = ['Apple', 'Banana', 'Licchi', 'Picchi']
    //console.log('arrayyyy', fruits[0]);
    // let fruitsAdded= fruits.push('Khichi') =>Add an item to the end of an Array
    // let fruitsRemoved= fruits.pop() => Remove an item from the end of an Array
    // let reomveFromStart=fruits.shift() => Remove an item from the beginning of an Array
    // let addFromStart = fruits.unshift('Sweet Apple'); => Remove an item from the beginning of an Array
    // let pos = fruits.indexOf('Bannana') => Find the index of an item in the Array
    
    //The concat() method is used to merge two or more arrays. 
    //const array2 = ['d', 'e', 'f'];
    //const array3 = array1.concat(array2);
    //console.log(array3);

    //let pos = 1
    //let removeItem = fruits.splice(pos, 2) Remove an item by index position
    //let itemIndex = fruits.indexOf('Banana')
    //let itemIndex = Object.keys(fruits)
    //console.log('arrayyyy', itemIndex);


// Find anagrams of each word in list
// Input: ["see", "tea", "eat", "sear", "ears", "ate"]
// Output: {"see": [], "tea":["eat", "ate"], "eat":["tea", "ate"], "ate":["eat", "tea"], "sear":["ears"], "ears":["sear"]}
// Anagrams means words having all the letters same, e.g., "sit" and "ist" are anagrams but "sit" and "sat" are not anagrams.

// [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]

console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]
// Input  : arr[] = {6, 2, 5, 2, 2, 6, 6}


// function isAnagram(stringA, stringB) {
//     const sanitizeString = function (str) {
//         return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
//     }
//     return sanitizeString(stringA) == sanitizeString(stringB)
// }


// Words to match
var words = ["see", "tea", "eat", "sear", "ears", "ate"];
// The output object
var anagrams = {};

for (var i in words) {
    var word = words[i];
    // sort the word like you've already described
    //var sorted = sortWord(word);
    var sorted = word.split('').sort().join('');
    // If the key already exists, we just push
    // the new word on the the array
    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    } 
    // Otherwise we create an array with the word
    // and insert it into the object
    else {
        anagrams[sorted] = [ word ];
    }
}

// Output result
for (var sorted in anagrams) {
    var words = anagrams[sorted];
    var sep = ",";
    var out = "";
    for (var n in words) {
        out += words[n] + sep;
        //sep = "";
    }
    //document.writeln(sorted + ": " + out + "<br />");
    document.writeln(`${sorted}  [${out}],`);
}


function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("Bhanwar","Bhawwwr")






    return(
        <div>
           
            {
                fruits.map((fruit)=>(
                    <div key={fruit.index}>
                    {fruit}
                    </div>
                ))

            }
           
        </div>
    )
}
export default Test;