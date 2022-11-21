const arr = [1, 2, 3, 4, 5]

const stringifyTypeArray = (arr) => {
    return arr.join(" ").toString()
}

console.log(stringifyTypeArray(arr))

// export function
module.exports = stringifyTypeArray