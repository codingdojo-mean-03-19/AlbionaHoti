var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = this.miles;
    }
    Bike.prototype.displayInfo = function () {
        console.log("Here are the details for the bike! Price: " + this.price + " - Maximum Speed: " + this.max_speed + " - Total miles: " + this.miles);
    };
    Bike.prototype.ride = function () {
        this.miles += 10;
        console.log("Riding");
        return this;
    };
    Bike.prototype.reverse = function () {
        if (this.miles > 5) {
            this.miles -= 5;
        }
        console.log("Reversing");
        return this;
    };
    return Bike;
}());
var bike1 = new Bike(350, "25mph");
bike1.ride();
bike1.ride();
bike1.ride();
bike1.reverse();
bike1.displayInfo();
var bike2 = new Bike(123, "15mph");
bike2.ride();
bike2.ride();
bike2.reverse();
bike2.displayInfo();
var bike3 = new Bike(453, "45mph");
bike3.reverse();
bike3.reverse();
bike3.reverse();
