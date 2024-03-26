const myArr = [0,1,2,3,4,5]
const myHeros = ['shaktiman', 'nagraj']
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0])
// console.log(myArr2)

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(8))

// const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr)

//slice, splice

const myn1 = myArr.slice(1,3)
// console.log(myn1)

const myn2 = myArr.splice(1,3)
// console.log(myn2)
// console.log("b", myArr)

const marvel_heros = ['thor', 'Ironman', 'Spiderman']
const dc_heros = ['Superman', 'flash', 'batman']

const allHeros = [...marvel_heros, ...dc_heros]
// console.log(allHeros)

const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array)

console.log(Array.isArray("pankaj"))
console.log(Array.from("pankaj"))
console.log(Array.from({name: 'pankaj'})) //gives empty array until specify whether to make key array or value array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))