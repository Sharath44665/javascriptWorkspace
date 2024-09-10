console.log(new Date()) // 2024-09-10T03:48:46.639Z

console.log(Date.now()) // 1725940450562

console.log(new Date().getTime()) // 1725940450562

console.log(new Date().valueOf()) // 1725940450562

setTimeout(() => {
    console.log(new Date().getTime()) // 1725940451565
}, 1000);

// create ids in learning apps

let people = []
people = [...people, {id: Date.now(), name:"Susan"}]

setTimeout(() => {
    people = [...people, {id: Date.now(), name: "Sharath"}]
    console.log(people)

    // output:
    // [
    //     { id: 1725940720724, name: 'Susan' },
    //     { id: 1725940721728, name: 'Sharath' }
    // ]
}, 1000);

// create/get dates

console.log(`create: ${new Date(1725940450562)}`) // create: Tue Sep 10 2024 09:24:10 GMT+0530 (India Standard Time)

const now  = Date.now()
// 1 sec  = 1000 
const futureDate = new Date(now + 1000 * 60) // 1 sec * 60 = 1min 

console.log(`future date: ${futureDate}`) // future date: Tue Sep 10 2024 11:24:39 GMT+0530 (India Standard Time)
console.log(`now date: ${new Date()}`) //       now date: Tue Sep 10 2024 11:23:39 GMT+0530 (India Standard Time)

// time difference:

const todayDate = new Date()

// 1 sec = 1000
// 1 min = 60 sec => 60*1000
// 1 hour = 1 min * 60 => 60*1000 * 60
// 1 day = 24 hour => 60*1000 * 60 * 24
const anotherDate = new Date(now + 1000*60*60*24*3) // future 3 days

// console.log(`today date: ${todayDate}`)
// console.log(`another date: ${anotherDate}`)

const firstVal = todayDate.getTime()
const secondVal = anotherDate.getTime()

console.log(`firstVal: ${firstVal}`)    // firstVal: 1725948619816
console.log(`secondVal: ${secondVal}`) // secondVal: 1726553419816

const timeDiff = secondVal-firstVal

const hours = timeDiff/(1000*60*60)
console.log(`remaining hours: ${hours}`) // remaining hours: 72



