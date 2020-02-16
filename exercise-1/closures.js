let makeCounter = function () {
    let privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
};

//<editor-fold desc="testing">
let counter1 = makeCounter();
let counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 0 */
//</editor-fold>

let makePerson = function (name, age) {
    let person = {name: name, age: age};

    person.getInfo = function () {
        return person.name + ", " + person.age;
    };

    person.setAge = function (age) {
        person.age = age;
    };

    person.setName = function (name) {
        person.name = name;
    };

    return person;
};

//<editor-fold desc="testing">
let person1 = makePerson("Emil",  25);
let person2 = makePerson("Almeborg", 30);
console.log(person1.getInfo());
console.log(person2.getInfo());
person1.setName("Bertil");
person1.setAge(800);
console.log(person1.getInfo());
//</editor-fold>

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    set name(value) {
        this._name = value;
    }

    set age(value) {
        this._age = value;
    }

    get info() {
        return this._name + ", " + this._age;
    }
}

//<editor-fold desc="testing">
let person = new Person("Emil", 25);
console.log(person.info);
person.name = "Moritz";
console.log(person.info);
//</editor-fold>
