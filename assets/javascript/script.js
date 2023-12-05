
class Pokemon {
    constructor(name, type, num){
        this.name = name;
        this.type = type;
        this.num = num;
    }
};

//Pokemon objects
var pikachu = new Pokemon("Pikachu", "Electric", 2)
var charmander = new Pokemon("Charmander", "Fire", 5)

//Pokemon Array
var pokemonArray = [];
pokemonArray.push(pikachu)
pokemonArray.push(charmander)


console.log(pokemonArray)
//Console log is (2)[Pokemon, Pokemon]


var nameEntry = document.getElementById("form")
nameEntry.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
    event.preventDefault();
    var pokeName = document.getElementById("name").value;
    console.log(pokeName)
    event.currentTarget.value = "";
  }
})
