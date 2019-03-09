module.exports = {
    /**
     * Comprueba que son valores numéricos
     * @param {*} n1 
     * @param {*} n2 
     */
    esNumero: function (n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            return false;
        }
        return true;
    }
}