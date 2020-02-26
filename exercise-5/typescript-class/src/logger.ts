function logger(a: number, b: string) {
    console.log(`Number 1: ${a}, string 2: ${b}`)
}

let a = 12;
let b = "Sup fuckers";
logger(a, b);

interface Person {
    name: string
}

interface Address {
    address: string
}

function loggerV2(person: Person, address: Address) {
    console.log(`Person: ${person.name}, Address: ${address.address}`)
}

const person = {name: "Peter"};
const address = {address: "HELL"};
loggerV2(person, address);
