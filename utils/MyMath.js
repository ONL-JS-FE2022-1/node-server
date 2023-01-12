class MyMath {
    static sum = (a, b) => a + b;
    static sub = (a, b) => a - b;
    static multy = (a, b) => a * b;
    static div = (a, b) => a / b;
}

// Експортуємо 1 об'єкт MyMath і більше нічого
// module.exports = MyMath;

// Експортуємо об'єкт, в якому лежить: MyMath, функція і змінна
//module.exports.MyMath = MyMath;
//module.exports.superFunc = function () {};
//module.exports.constant = 'value';

module.exports = {
    MyMath,
    superFunc: () => {},
    constant: 'value'
}
