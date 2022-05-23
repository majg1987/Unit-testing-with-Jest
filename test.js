// importar la funcion sum del archivo app.js
const {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound,
} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equals 23', () => {
    // dentro de la prueba llamamos a nuestra funcion con dos numeros
    let total = sum(14, 9);
    // esperamos que la suma de esos dos numeros sea 23
    expect(total).toBe(23);
});

// importo las funciones desde app.js
const {

} = require('./app.js')

test("One euro should be 1.206 dollars", () => {
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One dollar should be 106.583 yens", () => {
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.58333333333334)
});

test("One yen should be 0.00625489 pounds", () => {
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.006254886630179828)
});