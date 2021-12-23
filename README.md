# shri-async
Задание
Реализовать функцию reduce с использованием асинхронного API из объекта Homework (см. playground.js)

Сигнатура функции:
```
type reduce = (
    array: AsyncArray
    fn: (
        acc: any,
        cur: any,
        i: number,
        src: AsyncArray,
        cb: (result: any) => void
    ) => void
    initialValue: any
    cb: (result: any) => void
) => void
```

**Ограничения**

Решение должно работать на Node.js 16

Запрещено использовать:
* Арифметические операции и операции сравнения. Вместо них следует вызывать функции из Homework
* Любые операции для работы с массивами. Доступны только методы AsyncArray
* Импорты. Весь вспомогательный код следует положить в замыкание (см. оформление)

**Оформление**

Задачу решить в отдельном репозитории. Решение положить в папку solution  в файл index.js  и оформить по шаблону:
```
// solution/index.js
module.exports = function (Homework) {

    // вспомогательные фукнции и т.д.

    return (array, fn, initialValue, cb) => {

        // асинхронный reduce

    }
}
```
