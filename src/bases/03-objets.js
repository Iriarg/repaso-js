

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 234324,
        lat: 14.34534,
        lng: 34.92834,
    }
}

const persona2 = { ...persona };

persona2.nombre = 'Peter'

//const personaSet = new Set()

console.log(persona)
console.log(persona2)
//console.log(personaSet)