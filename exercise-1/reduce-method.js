// join
const all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(', #'));

// myReducer
const numbers = [2, 3, 67, 33];
console.log(numbers.reduce((a, b) => a + b));

let members = [
    {name: "Peter", age: 18},
    {name: "Jan", age: 35},
    {name: "Janne", age: 25},
    {name: "Martin", age: 22},
];

function myWeduca(sum, {age}, _, {length}) {
    return sum + age / length
}

console.log(members.reduce(myWeduca, 0));

// electionFraud
let votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

function count(array) {
    return array.reduce(function (tally, vote) {
        // the conversion of tally[vote] to a number using +tally[vote]
        // to avoid the constructor (or toString) problem
        tally[vote] = (+tally[vote] || 0) + 1;
        return tally;
    }, {});
}

console.log(count(votes));
