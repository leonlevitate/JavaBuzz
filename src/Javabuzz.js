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