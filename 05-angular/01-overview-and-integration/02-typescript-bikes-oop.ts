class Bike {
  price: number;
  max_speed: string;
  miles: number;

  constructor(price: number, max_speed: string) {
      this.price = price;
      this.max_speed = max_speed;
      this.miles = this.miles;
  }

  displayInfo() {
      console.log(`Here are the details for the bike! Price: ${this.price} - Maximum Speed: ${this.max_speed} - Total miles: ${this.miles}`);
  }

  ride() {
      this.miles += 10;
      console.log(`Riding`);
      return this;
  }

  reverse() {
      if(this.miles > 5) {
        this.miles -= 5;
      }
      console.log("Reversing");
      return this;
  }
}

let bike1 = new Bike(350, "25mph");

bike1.ride();
bike1.ride();
bike1.ride();

bike1.reverse();

bike1.displayInfo();

let bike2 = new Bike(123, "15mph");

bike2.ride();
bike2.ride();

bike2.reverse();

bike2.displayInfo();

let bike3 = new Bike(453, "45mph");

bike3.reverse();
bike3.reverse();
bike3.reverse();