add = function (x, y) {
        if (isNaN(x) || isNaN(y))
            return "error"
        return x + y
    }
multiply = function (x, y) {
        if (isNaN(x) || isNaN(y))
            return "error"
        return x * y

    }
sub = function (x, y) {
        if (isNaN(x) || isNaN(y))
            return "error"
        return x - y
    }

module.exports = {
    add: add,
    sub: sub,
    multiply:multiply
}