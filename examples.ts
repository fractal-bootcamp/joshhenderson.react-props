// && 
const and = (left, right) => !!left ? right : false
const or = (left, right) => !!left ? true : right

const A = true
const B = "red"
console.log(or(A, B))
console.log(A || B)