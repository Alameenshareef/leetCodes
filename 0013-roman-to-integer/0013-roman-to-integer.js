/**
 * @param {string} s
 * @return {number}
 */
let data = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000

}



const romanToInt = (value) => {
    let total = 0
    for (items in value) {

        let index = Number(items)

        let current = data[value[index]]
        let next = data[value[index + 1]]

        if (next && current < next) {
          total -= current
        } else {
     
            total += current
        }

    }
return total


}

const value = romanToInt("IMI")

console.log(value);