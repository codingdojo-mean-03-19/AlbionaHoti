/*
    Interfaces are simply a way to define structure, either it's an object structure
    or a function structure - or even a class structure.


*/
// Not using an interface
function printName(user) {
    console.log(user.name);
    if (user.cellNumber) {
        console.log(user.cellNumber);
    }
    return;
}
function printMyName(user) {
    console.log(user.name);
    return;
}
var APINotes = /** @class */ (function () {
    function APINotes() {
    }
    APINotes.prototype.retrieve = function () {
        return 5;
    };
    APINotes.prototype.update = function () {
    };
    APINotes.prototype.destroy = function () {
    };
    // create() {
    // }
    APINotes.prototype.next_method = function () {
    };
    return APINotes;
}());
