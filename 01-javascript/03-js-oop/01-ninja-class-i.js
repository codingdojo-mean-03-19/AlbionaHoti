//object constructor
function Ninja(name) {
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;

  this.sayName = function () { console.log('My ninja name is ' + name); }

  this.showStats = function () { console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: ", strength); }

  this.drinkSake = function () {
    this.health += 10;
    return this;
  }
}

var ninja1 = new Ninja('Albiona');
ninja1.showStats();
ninja1.drinkSake().showStats();