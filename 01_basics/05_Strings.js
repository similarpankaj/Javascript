const name = 'pankaj'
const repoCount = 50

// console.log(name + repoCount + 'value')

// console.log(`Hello my name is ${name} with ${repoCount}`)

const gameName = new String('pankajfc')
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "     pankaj     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "http://pankaj.com/pankaj%20upadhyay"

console.log(url.replace('%20', '-'))

const splitStr = "pankaj-upadhya-agra"

console.log(splitStr.split('-'))