// function addTowNumbers(number1, number2) {
//     console.log(number1 + number2); 
// }

function addTowNumbers(number1, number2) {
    let result = number1 + number2
    return result
}

const result = addTowNumbers(3,5)
// console.log(result)

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(2,3,4))

const user = {
    username: 'pankaj',
    price: 122
}

function  handleObject(anyobject) {
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
