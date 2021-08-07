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