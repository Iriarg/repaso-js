

const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const { name, age, codeName, power = 'Dinero' } = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHero = ({ nombre: name, age, codeName, power }) => ({
    id: 29348023,
    nombre,
    age,
    codeName,
    power,
})

console.log(createHero(person))