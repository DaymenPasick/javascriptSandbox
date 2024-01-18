
// class Pokemon {
//     constructor(name, type, num){
//         this.name = name;
//         this.type = type;
//         this.num = num;
//     }
// };

// //Pokemon objects
// var pikachu = new Pokemon("Pikachu", "Electric", 2)
// var charmander = new Pokemon("Charmander", "Fire", 5)

// //Pokemon Array
// var pokemonArray = [];
// pokemonArray.push(pikachu)
// pokemonArray.push(charmander)


// console.log(pokemonArray)
// //Console log is (2)[Pokemon, Pokemon]


// var nameEntry = document.getElementById("form")
// nameEntry.addEventListener('keypress', function(event){
//     if (event.key === 'Enter'){
//     event.preventDefault();
//     var pokeName = document.getElementById("name").value;
//     console.log(pokeName)
//     event.currentTarget.value = "";
//   }
// })





// class Person {
//     talk() {
//         return 'Talking'
//     }
// }


// const me = new Person ()
// const you = new Person ()

// console.log(Person.prototype);
// console.log(you.talk());

// const dude = ['woop', 'wap']
// console.log(dude);


// const name = 'yousa';
// console.log(name.__proto__);



// function num2Day(num) {
//     if(num = 1) return 'Monday'
//     if(num = 2) return 'Tuesday'
//     if(num = 3) return 'Wednesday'
//     if(num = 4) return 'Thursday'
//     if(num = 5) return 'Friday'
//     if(num = 6) return 'Saturday'
//     if(num = 7) return 'Sunday'
//     else { return undefined
//     }

// }

// result1 = num2Day(2)
// result2 = num2Day(3)
// result3 = num2Day(4)



// console.log(result1);
// console.log(result2);
// console.log(result3);


// console.log(num2Day(1));

// function num2Day(num) {
//     class Day{
//         constructor(num){
//             this.day = num;
//         }
//     }
//     return Day
// }

// console.log(Day(1))

// class DayOfWeek {
//     constructor(num){
//         this.day = num;
//     }
// }


// const Day = new DayOfWeek(1)


// console.log(Day);



// function removeDupes(nums){
//     const list = [];

//     for (var i = 0; i < nums.length; i++){
//        var num = nums[i];
//        if (!list.includes(num)){
//         list.push(num)
//        }
        
//     }

//     return [];
// }



// const removeDupes = (nums) => {

//     const list = [];

//     for (var i = 0; i < nums.length; i++){
//        var num = nums[i];
//        if (!list.includes(num)){
//         list.push(num)
//        }
        
//     }

//     return [];
// }
// const removeDupes = (nums) => {

//     const list = nums.reduce((prev, num) => !prev.includes(num) ? prev.concat(num) : prev, []);

//     return list;
// }

// const result1 = removeDupes([4,5,4,4,7,5])

// console.log(result1)



// const test = [1,2,3,4]

// const result = test.reduce((start, num) => start + num, 0);

// console.log(result)

// function detectArrayElement(arr, ele){
//     for(var i = 0;i < arr.length;i++){
//         if (arr[i] === ele) return true;
//     }
//     return false;

// }

// const result1 = detectArrayElement([1,2,3], 1);

// console.log(result1)

// function isInArray(arr, elem) {
//     // for (let i = 0; i < arr.length; i++) {
//     for (const item of arr) {  
//       if (item === elem) return true;
//     }
//     return false;
//   }


//  function altarArray(nums, func) {
    
//   const resultArray = []

//     for(const num of nums) {
//       if(func == 'increment') {
//         resultArray.push(num[i] + 1)
//       }
//       if(func == 'double') {
//         resultArray.push(num[i] * 2)
//       }
//       if(func == 'decrement') {
//         resultArray.push(num[i] - 1)
//       }
//       else {
//         return 'Please enter a valid operator'
//       }
//     }




//     return resultArray
//  }

// Write a function that takes in a number and reverses the order of the digits.
// Ex:
// Input: 1234
// Output:4321
// Input: 1201
// Output:1021
// Input: 4
// Output: 4
const reverseDigits = (num) => {
  //const str = num.toString()
  const str = String(num)
  let result = '';


  for (let i = str.length - 1; i >= 0; i--){
    result += str[i]
  }

  //could also use a regular for loop or even forOf loop
  // with this as the function { result = str[i] + result} OR result = loopedit + result

  return Number(result);
};

const output1 = reverseDigits(1234);
const output2 = reverseDigits(1201);
const output3 = reverseDigits(4);

console.log(output1);
console.log(output2);
console.log(output3);