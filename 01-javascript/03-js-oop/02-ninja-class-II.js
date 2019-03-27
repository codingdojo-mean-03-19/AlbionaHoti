//object constructor
function Ninja(name) {
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;

  this.sayName = function () { console.log("My ninja name is " + name); }

  this.showStats = function () { console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: ", strength); }

  this.drinkSake = function () {
    this.health += 10;
    return this;
  }

  this.punch = function (oneNinja) {
    if (oneNinja instanceof Ninja) {
      oneNinja.health -= 5;
      console.log(this.name + " was punched by " + oneNinja.name + " and lost 5 Health!");
    }
    return this;
  }

  this.kick = function (callNinja) {
    if (callNinja instanceof Object) {
      this.punch(callNinja);
      let points = callNinja.strength;
      console.log('consoleee strength', callNinja.strength);
      for (var i = 0; i < points; i++) {
        callNinja.health -= 15;
      }
      console.log("In this case, " + callNinja.name + " lost " + points * 15 + " health because " + callNinja.name + " has " + points + " of strength");
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