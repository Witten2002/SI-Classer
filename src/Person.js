/**
 * This is the class for Person
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @author Tiberius Gherac <tg222hh@student.lnu.se>

 * @version 1.0.0
 */

// -----------------------------------------
// TODO:
//    Create a calss called Person.
//    Create the constructor with name and age.
//    Create a method called greet. That should write out in the console your name and age.
//    Export the class.
// -----------------------------------------

/**
 * Represents a person.
 */
export class Person {
    /**
     * Creates an instance of Person.
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * Greets with the person's name and age.
     */
    greet() {
        console.log(`This is your name: ${this.name}, and this is your age ${this.age}`);
    }
}