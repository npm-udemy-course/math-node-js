module.exports = {
    /**
     * Comprueba que son valores numéricos
     * @param {*} numbers Lista de números a evaluar
     */
    esNumero: function (numbers) {
        var numberOk = true;
        for (var i = 0; i < numbers.length && numberOk; i++) {
            if (typeof numbers[i] !== 'number') {
                numberOk = false;
            }
        }
        return numberOk;
    }
}