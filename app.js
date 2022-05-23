// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollars) => {
    return (dollars / oneEuroIs.USD) * oneEuroIs.JPY;
}
console.log(fromDollarToYen(1));

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}
console.log(fromEuroToDollar(3.5));

const fromYenToPound = (yenes) => {
    return (yenes / oneEuroIs.JPY) * oneEuroIs.GBP;
}
console.log(fromYenToPound(1));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};