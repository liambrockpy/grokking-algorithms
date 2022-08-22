/*
    DICTIONARY USING OBJECTS
*/

//keys can be set using different types, however javascript will convert them all to strings
let dynamicNum = Math.floor(Math.random() * 10)
const obj = {
    "mood": "happy",
    1: "one",
    2.5: "two point five",
    thisString: "a string",
    [dynamicNum]: "random",
    someFunc: () => "hello world"
}

//2 different ways of accessing the values associated with the keys (dot/bracket notation)
console.log(obj.mood)
console.log(obj["someFunc"].toString())    //toString needed in order to see contents of function, otherwise console prints `[Function]`
//following cannot be accessed using dot notation
console.log(obj["2.5"])
console.log(obj[dynamicNum])

//iterate using Object.entries
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
}

/*
    DICTIONARY USING MAPS - PREFERRED
*/

let person = new Map()

//in Maps, we can use different data types for keys
person.set("id", 123)
person.set("registered", true)
person.set(1, [1, 2, 3, 4, 5])
let exampleName = { firstName: "Liam" }
person.set(exampleName, "available")

console.log(person)

//check if keys exist
person.has("dog")
person.has("id")
//delete key/value pair
person.delete("id")

console.log(person.get(1))
console.log(person.size)
