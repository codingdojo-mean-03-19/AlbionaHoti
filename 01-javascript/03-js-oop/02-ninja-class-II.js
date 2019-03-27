//object constructor
function Ninja(name) {
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 1;

  this.sayName = function () { console.log("My ninja name is " + name); }

  this.showStats = function () { console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength); }

  this.drinkSake = function () {
    this.health += 10;
    return this;
  }

  this.punch = function (ninja) {
    if (ninja instanceof Ninja) {
      ninja.health -= 5;
      console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    }
    return this;
  }

  this.kick = function (Ninja) {
    if (Ninja instanceof Object) {
      Ninja.health -= strength * 15;
      console.log(Ninja.name + " was kicked by " + this.name + " and lost 15 Health");
    }
    return this;
  }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");

blueNinja.showStats();
redNinja.showStats();

redNinja.punch(blueNinja);
blueNinja.showStats();

blueNinja.kick(redNinja);
redNinja.showStats();