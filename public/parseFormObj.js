// test obj
// formObj = {
//     id: '483',
//     name: 'Dialga',
//     img: 'https://img.pokemondb.net/artwork/large/dialga.jpg',
//     type: 'steel dragon',
//     hp: '100',
//     attack: '120',
//     defense: '120',
//     spattack: '150',
//     spdefense: '100',
//     speed: '90'
//   }

const parseFormObj = (formObj) => {
    // create type array if string has spaces, therefore multiple types

    if (formObj.type.indexOf(' ') >= 0) {
        const types = formObj.type
        const typeArray = []

        const typesSplit = types.split(' ')

        return {
            id: formObj.id,
            name: formObj.name,
            img: formObj.img,
            type: typesSplit,
            stats: {
                hp: formObj.hp,
                attack: formObj.attack,
                defense: formObj.defense,
                spattack: formObj.spattack,
                spdefense: formObj.spdefense,
                speed: formObj.speed
            }
        }

    } else {

        // push type into array of one
        const typeArray = []
        typeArray.push(formObj.type)

        return {
            id: formObj.id,
            name: formObj.name,
            img: formObj.img,
            type: typeArray,
            stats: {
                hp: formObj.hp,
                attack: formObj.attack,
                defense: formObj.defense,
                spattack: formObj.spattack,
                spdefense: formObj.spdefense,
                speed: formObj.speed
            }
        }
    }
}

// export function
module.exports = parseFormObj