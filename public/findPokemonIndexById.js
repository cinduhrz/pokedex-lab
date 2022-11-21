const findPokemonIndexById = (id, arr) => {
    // convert ID to integer
    const idInt = parseInt(id)

    // find pokemon index in array by it's ID
    const clickedPokemonIndex = arr.findIndex((element) => parseInt(element.id) === (idInt))
    return clickedPokemonIndex
}

// export function
module.exports = findPokemonIndexById