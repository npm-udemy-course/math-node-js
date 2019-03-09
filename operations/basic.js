const validations = require('./../validations');
const error = require('./../messages/error');

module.exports = {
    /**
     * Suma de dos numeros
     * @example
     * n1 = 1 , n2 = 3 = > resultado 4
     * @param {*} n1 Numero uno de la suma
     * @param {*} n2 Numero dos de la suma
     */
    suma: function (n1, n2) {
        return (validations.esNumero(n1, n2) ? n1 + n2: error.noNumber());
    },
    /**
     * Resta de dos numeros
     * @example
     * n1 = 1 , n2 = 3 = > resultado -2
     * @param {*} n1 Numero uno de la resta
     * @param {*} n2 Numero dos de la resta
     */
    resta: function (n1, n2) {
        return (validations.esNumero(n1, n2) ? n1 - n2: error.noNumber());
    },
    /**
     * Multiplicacion de dos numeros
     * @example
     * n1 = 1 , n2 = 3 = > resultado 3
     * @param {*} n1 Numero uno de la multiplicacion
     * @param {*} n2 Numero dos de la multiplicacion
     */
    multiplicacion: function (n1, n2) {
        return (validations.esNumero(n1, n2) ? n1 * n2: error.noNumber());
    },
    /**
     * Division de dos numeros
     * @example
     * n1 = 1 , n2 = 3 = > resultado 0.33
     * @param {*} n1 Numero uno de la Division
     * @param {*} n2 Numero dos de la Division
     */
    division: function (n1, n2) {
        return (validations.esNumero(n1, n2) ? n1 / n2: error.noNumber());
    }
}

