const people = ['George', 'Adam', 'Martin', 'Helen'];

// myFilter

function myFilter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i])
        }
    }
    return newArray;
};

console.log(myFilter(people, (person) => person.length <= 5));
console.log(people.myFilter( (person) => person.length <= 5));

// myMap

function myMap(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    return newArray;
};

console.log(myMap(people, (person) => person + 'lol'));
console.log(people.myMap((person) => person + 'lol'));
