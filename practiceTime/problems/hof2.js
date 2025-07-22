const users = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 17, email: "bob@example.com" },
    { name: "Carol", age: 30, email: "carol@example.com" },
    { name: "Dave", age: 22, email: "dave@example.com" },
    { name: "Eve", age: 19, email: "eve@example.com" }
];

/*1. Find all users who are above 18 years old.*/
// console.log(users.filter(user => user.age > 18));

/*2. Sort `users` by the `age` property in ascending order.*/
// console.log(users.sort((a, b) => a.age - b.age));

/*3. Create a new array containing only the `name` values of all users.*/
// console.log(users.map(user => user.name) );


/*4. Check if there exists any user with the email `"dave@example.com"`.*/
console.log(users.some(user => user.email == "dave@example.com"));

/*5. Calculate the average age of all users.*/
let avg = users.reduce((acc, currentVal) => currentVal.age + acc, 0) / users.length;
console.log(avg);

// ! Group users by age group, under 21, above 25, in between. (can be dynamic as well, for example group users by city(where no of cities can be dynamic))

let group = users.reduce((acc, user) => {
    if (user.age < 21) {
        acc["under21"].push(user)
    } else if (user.age > 25) {
        acc["above25"].push(user)
    } else {
        acc["inBetween"].push(user)
    }
    return acc
}, {
    "under21": [],
    "inBetween": [],
    "above25": [],
})

console.log(group);
