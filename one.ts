/* Exercise:

    Given the data, define the interface "User" and use it accordingly.

*/

export interface User {
    name: string;
    age: number;
    occupation: string;
}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
*/

/* In my own words: what is an interface?
Interface is a way to build a type. (Type is another way, but Interface is preferred)
It's a way to name an object type.
You're saying: "If you're going to make an object User, this is the form object User should take. What is in it, and what format is used for it"

What's the difference then between Interface and Type?
You can't add new keys to a Type after you've declared it (easily). But you can add new keys any time to an Interface.

"Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable."
*/
