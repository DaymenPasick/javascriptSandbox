
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



function num2Day(num) {
    if(num = 1) return 'Monday'
    if(num = 2) return 'Tuesday'
    if(num = 3) return 'Wednesday'
    if(num = 4) return 'Thursday'
    if(num = 5) return 'Friday'
    if(num = 6) return 'Saturday'
    if(num = 7) return 'Sunday'
    else { return undefined
    }

}

result1 = num2Day(2)
result2 = num2Day(3)
result3 = num2Day(4)



console.log(result1);
console.log(result2);
console.log(result3);


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