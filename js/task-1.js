// const str = "Hello world"
// const idx = str.indexOf("o")
// console.log(str.indexOf("o",idx + 1)) // 6



// const str = "My Name Davyd"
// const idx =str.indexOf("a")
// console.log(str.indexOf("a",idx + 1)) // 9


// const str = "Alina name"
// const idx =str.indexOf("n")
// console.log(str.indexOf("n",idx + 1)) // 6

// const str = "Windows Socials"
// const idx =str.indexOf("s")
// console.log(str.indexOf("s", idx + 3)) // 14


// const str ="Windows"
// console.log(str.length) // 7

// const str ="Hello WORLD";
// console.log(str.toLowerCase(h)); //folse
// console.log(str)

// const str ="Helo World"
// console.log(str.toUpperCase(e)) // folse

// const str ="DAvyd  Bogomaz"
// console.log(str.includes("y", 3))

// const str ="Davyd Boogmaz"
// console.log(str.endsWith("Boogmaz"))

// const str ="Davyd Bogomaz"
// console.log(str.startsWith("Davyd"))


// const str ="Alina is Davyd"
// console.log(str.replace("is","🌹"))

// const str ="Davyd Bogomaz"
// console.log(str.replaceAll("a","😆"))


function getUserNames(users) {
    return users.map(user => user.name);
}

console.log(
getUserNames([
{
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
},
{
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
},
{
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
},
{
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
},
{
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
},
{
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
},
{
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
},
])
);