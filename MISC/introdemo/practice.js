// variables
const variable1 = 333
let variable2  = 100
console.log(variable1 + variable2)

const someConstantText = "This cannot be changed or reassigned"
// someConstantText = "modification"  ====> Throws TypeError: Assignment to constant variable.
console.log(someConstantText)

// Arrays
const arrayList = [1,2,4,5,5,3,343,53,34]
console.log(arrayList.length);
console.log(arrayList[4])

console.log("----------Printing Array List Values--------------")

arrayList.forEach(value =>{
  console.log(value)
})

console.log("----------End of Array List Values--------------")

// Objects
const obj1 = {
  name:"John Doe",
  age:24,
  education:"Undergrad"
}
console.log("Printing Object")

console.log(obj1)
console.log("----------------------------------------------------")

//arrow function
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  console.log("adding both values.")
  return p1 + p2
}

console.log(sum(2,34))