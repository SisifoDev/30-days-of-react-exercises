const emptyArray = []

const fiveElements = [1, 2, 3, 4, 5]
console.log(fiveElements.length) // 5

let firstItem = fiveElements[0]
console.log(firstItem) // 1

let lastItem = fiveElements[fiveElements.length - 1]
console.log(lastItem) // 4

let middle = Math.floor(fiveElements.length / 2)
let middleItem = fiveElements[middle]
console.log(middleItem)

const mixedDataTypes = [
  'numbers',
  'strings',
  'booleans',
  'null',
  'undefined',
  'simnbols',
  'objects',
  'arrays',
]

console.log(mixedDataTypes.length) // 8

const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
]

console.log(itCompanies)
console.log(`Total companies: ${itCompanies.length}`)

console.log(`First company: ${itCompanies[0]}`)
console.log(`Last company: ${itCompanies[itCompanies.length - 1]}`)
console.log(
  `Middle company: ${itCompanies[Math.floor(itCompanies.length / 2)]}`
)

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i])
}
for (let i = 0; i < itCompanies.length - 1; i++) {
  console.log(itCompanies[i].toUpperCase())
}
