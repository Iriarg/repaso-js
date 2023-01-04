

// import { owners } from "./data/heroes";

import superHeroes from '../data/heroes'
// const [dc, marvel] = owners

//getHeroeById ( id )
//funciones de flecha
//find
export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)

// console.log(getHeroById(2)) // Spiderman


//getHeroesByOwner ( 'DC', 'Marvel')
//[]
export const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)
// console.log(getHeroByOwner('Marvel')) // Spiderman

// console.log(dc)
// console.log(marvel)
// console.log(superHeroes)


//para exportarlo en el index debemos
//pegar el siguiente código en el
//index.js
// import { getHeroById, getHeroByOwner } from "./bases/08-imp-exp"

// console.log(getHeroById(2)) // Spiderman
// console.log(getHeroByOwner('Marvel')) // Spiderman
