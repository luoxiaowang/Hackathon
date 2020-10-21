var a = [1, 32, 4, 54, 5234, 32, 32, 4, 54, 54, 32, 54, 54, 32,32]

// Type 1

function countFun(arr) {
  var sortResult = arr.sort()
  var result = {
    num: null,
    count: 0,
  }
  var current = 0
  var currentNum = null
  sortResult.forEach((item, index) => {
    if (!result.num) {
      result.num = item
      current = 1
    } else {
      if (currentNum === item) {
        current ++
      }
      if (currentNum !== item || index === sortResult.length - 1) {
        if (current > result.count) {
          result.num = sortResult[index - 1]
          result.count = current
          current = 1
        } else {
          current = 1
        }
        currentNum = item
      }
    }
  })
  return result
}

const result = countFun(a)
console.log(result.num, result.count)

