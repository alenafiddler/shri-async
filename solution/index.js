module.exports = function (Homework) {
  const { AsyncArray, add, subtract, multiply, divide, less, equal, lessOrEqual } = Homework;
  return async function (array, fn, initialValue, cb) {
    const asyncArrayGet = (idx) => new Promise(resolve => {
      array.get(idx, number => resolve(number) )
    })
    const asyncArrayLength = () => new Promise(resolve => {
      array.length((len)=> resolve(len))
    })
    const summ = (a ,b) => new Promise(resolve => {
      add(a, b, cb => resolve(cb))
    })

    const lessCheck = (a,b) => new Promise(resolve => {
      less(a, b, cb => resolve(cb))
    })

    const lengthArray = await asyncArrayLength()
    let index = 0
    let result = initialValue ?? 0
    while (await lessCheck(index,lengthArray)) {
      let item = await asyncArrayGet(index)
      result = await new Promise(resolve => {
        fn(result, item, index, array, resolve)
      });
      index = await summ(index, 1)
    }
    cb(result)
  }
}
