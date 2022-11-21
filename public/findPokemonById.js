const findPokemonById = (id, arr) => {
    // convert ID to integer
    const idInt = parseInt(id)

    // find pokemon in array by it's ID
    const clickedPokemon = arr.find((element) => parseInt(element.id) === (idInt))
    return clickedPokemon
}

// export function
module.exports = findPokemonById