function isFive(num) {
  if (num === 5) {
    return true
  } else {
    return false
  }
}

function isOdd(number) {

if (typeof number !== "number") {
  throw new Error("number should be a Number type")
} else if (number % 2 !== 0) {
    return true
  } else {
    return false
  }
}

function myRange(min, max, step = 1) {
  let arr = []
  if (min > max) {
    return []
  } 
 for (let i = min; i <= max; i+=step) {
   arr.push(i)
} 
return arr
}



module.exports = { isFive, isOdd, myRange };
