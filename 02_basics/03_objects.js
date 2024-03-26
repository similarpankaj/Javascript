// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: 'Pankaj',
    age: 28,
    location: 'Agra',
    email: 'pankaj@google.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

// Object.freeze(JsUser)  //in makes object immutable

JsUser.greeting = function () {
    console.log("Hello js user")
}

JsUser.greetingTwo= function () {
    console.log(`Hello js user ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());