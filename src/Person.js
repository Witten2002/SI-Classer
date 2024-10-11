/**
 * This is the class for Person
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @version 1.0.0
 */

// -----------------------------------------
// TODO:
//    Create a calss called Person.
//    Create the constructor with name and age.
//    Create a method called greet. That should write out in the console your name and age.
//    Export the class.
// -----------------------------------------

export class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`This is your name: ${this.name}, and this is your age ${this.age}`)
    }
}