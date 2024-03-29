var Javabuzz = function(){};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
    return (number % divisor === 0)
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
    return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
    return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisiblebyFifteen = function(number) {
    return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.says = function(number) {
    if (this.isDivisiblebyFifteen(number)) {
        return "JavaBuzz";
    }
    if (this.isDivisibleByThree(number)) {
        return "Java";
    }
    if (this.isDivisibleByFive(number)) {
        return "Buzz";
    }
    return number;
};