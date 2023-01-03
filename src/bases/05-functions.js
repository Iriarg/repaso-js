

// function saludar(xyz) {
//     return `hola ${xyz}`
// }


//Es más seguro hacerlo de esta manera
//que de la anterior
const saludar = (nombre = 'Peter') => `hola ${nombre}}`

// saludar = true

const nombre = 'Tony'

// console.log(saludar(nombre))

const getUser = () => ({
    uid: 'ABC123',
    username: 'Tony001'
})

const heroes = [{
    id: 1,
    name: 'batman'
}, {
    id: 2,
    name: 'superman'
}]

// const exist = heroes.some((heroe) => heroe.id === 1);
const { name, id } = heroes.find((heroe) => heroe.id === 1);


console.log(name)
