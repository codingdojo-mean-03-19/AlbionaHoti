/*
    Interfaces are simply a way to define structure, either it's an object structure
    or a function structure - or even a class structure.


*/

// Not using an interface

function printName(user: UserInterface) {
  console.log(user.name);
  if(user.cellNumber) { console.log(user.cellNumber)}
  return;
}

// using an interface
interface UserInterface {
  name: String
  email: String
  cellNumber?: number
}

function printMyName(user: UserInterface): void{
  console.log(user.name);
  return;
}

interface CRUDInterface {
   retrieve(): number;
   update();
   destroy();
   create?();
}

class APINotes implements CRUDInterface{
  abs: number;

  retrieve(): number {
    return 5;
  }

  update() {

  }

  destroy() {

  }

  // create() {

  // }

  next_method() {

  }
}