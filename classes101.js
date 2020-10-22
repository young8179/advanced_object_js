// const animal = {
//     name: "Nelson",
//     dob: new Date(2017, 05, 16),
//     species: "Dog"
// }

// console.log(animal)

function Animal(name, dob, species){
    this.name = name;
    this.dob = dob;
    this.species = species;
}

Animal.prototype.speak = function(){
    console.log(`Hello, my name is ${this.name}`)
}

const nelson = new Animal("nelson", new Date(2017, 05, 16), "Dog")
const theFarm = [
    new Animal("nelson", new Date(2017, 05, 16), "Dog"),
    new Animal("Yes", new Date(2015, 01, 16), "Dog"),
    new Animal("Fish", new Date(2020, 05, 16), "Fish"),
    new Animal("Atom", new Date(2013, 09, 16), "Cat")
]
// console.log(theFarm)


const first = theFarm[0]


// theFarm.forEach(element => {
//     for (let key in element){
//         // console.log(key)
//         const value = element[key];
//         console.log(`${key}: ${value}`);
//     }
    
// });


theFarm.forEach((animal)=>{
    animal.speak()
})