function quadraticFunctionSolver(a, b, c) {
    const results = [];
    results.push((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a));
    results.push((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a));
    return results;
}

module.exports = {
    quadraticFunctionSolver
}