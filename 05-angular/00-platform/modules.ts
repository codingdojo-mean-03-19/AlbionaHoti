// /*
//     Modules(ES6)


// */
// // Imports

// import * from 'libraryName'; // import * from x
// import { SpecificLibraryObject } from 'filepath/libraryname' // import 1 from x
// import { objectA, objectB } from 'filepath/libraryname'; // import 2 from x;

// // Real examples:

// import * from 'rxjs';
// import observable from 'rxjs/observable';
// import { SampleClass } from './modules';


// // Exports

// export class SampleClass {
//   sampleMethod(aStr: string): number {
//     return aStr.length();
//   } 
// } // Export a class inline

// // Alternative

// class SampleClass2 {
//   sampleMethod(aStr: string): number{
//     return aStr.length();
//   }
// }

// export { SampleClass2 as NewClassName } // Export a class with a different ame

// // Alternative

// class SampleClassB {
//   simpleMethod(aStr: string): number{
//     return aStr.length()
//   }
// }

// class SampleClassC {
//   sampleMethod(aStr: string): number {
//     return aStr.length();
//   }
// }

// export { SampleClassB, SampleClassC } // Export 2 classes
