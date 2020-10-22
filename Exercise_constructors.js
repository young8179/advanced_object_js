function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

const sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
const jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");

const friends = [
    new Person("Sonny", "sonny@hotmail.com", "483-485-4948"),
    new Person("Jordan", "jordan@aol.com", "495-586-3456")
]

// console.log(sonny)
console.log("==============print all info===============")
friends.forEach(friend =>{
    for(key in friend){
        const value = friend[key]
        console.log(`${key}: ${value}`)
    }
})

console.log("==============greet===============")
sonny.greet(jordan);
jordan.greet(sonny);


function contactInfo(person){
    console.log(`${person.name}'email: ${person.email}\n${person.name}'phone: ${person.phone}`)
}


console.log("==============contact info===============")
contactInfo(sonny)
contactInfo(jordan)
