/**
 * This is the start point of the application
 *
 * @author Ludwig Wittenberg <lw223cq@student.lnu.se>
 * @author Tiberius Gherac <tg222hh@student.lnu.se>
 * @version 1.0.0
 */

// -----------------------------------------
// TODO:
//    Import the class Person.
//    Create a new instace of the Person
//    Call the method greet.
// -----------------------------------------

import { Person } from './Person.js'

/**
 * An instance of the Person class.
 * 
 * @type {Person}
 * @constant
 */
const instanceOfPerson = new Person ('Tiberius', 28)

instanceOfPerson.greet()
instanceOfPerson.singLorem()

