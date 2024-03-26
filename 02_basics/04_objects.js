const tinderuser = new Object()

tinderuser.id = '123abc'
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
// console.log(tinderuser)

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userFullName: {
            firstName : 'hitesh',
            lastName: 'chaudhary'
        }
    }
}

// console.log(regularUser.fullname.userFullName)

const obj1 = {
    1:'a',
    2: 'b'
}

const obj2 = {3:'c', 4:'d'}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(tinderuser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: 'js in progress',
    price: '999',
    courseIntructor: 'pankaj'
}

const {courseIntructor : instructot} = course

console.log(instructot)