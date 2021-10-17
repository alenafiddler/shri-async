module.exports = function (Homework) {
  const {add, less} = Homework;
  return async function (array, fn, initialValue, cb) {
    const asyncArrayGet = (idx) => new Promise(resolve => {
      asyncArray.get(idx, number => resolve(number) )
    })
    const asyncArrayLength = () => new Promise(resolve => {
      asyncArray.length((len)=> resolve(len))
    })
    const summ = (a ,b) => new Promise(resolve => {
      add(a, b, cb => resolve(cb))
    })
    const lessCheck = (a,b) => new Promise(resolve => {
      less(a, b, cb => resolve(cb))
    })

    const lengthArray = await asyncArrayLength()
    let i = 0
    let summArray = 0
    while (await lessCheck(i,lengthArray)) {
      let item = await asyncArrayGet(i)
      summArray = await summ(summArray, item)
      i = await summ(i, 1)
    }
    summArray = await summ(summArray, initialValue)
    cb(summArray)
  }
}
