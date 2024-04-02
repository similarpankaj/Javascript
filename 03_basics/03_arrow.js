const user = {
    username: "pankaj",
    price: 999,
    welcome: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}

// user.welcome()
// user.username = "sam"
// user.welcome()

// console.log(this)

// function chai(params) {
//     let username = "pankaj"
    // console.log(this)   //glogal this
    // console.log(this.username)  //undefined
// }
//  chai()

const chai =  () => {
    let username = "pankaj"
    console.log(this)
}

// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))