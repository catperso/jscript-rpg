export default class Character {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  characterInfo() {
    return `Your character is ${this.name}, he is a great ${this.type} at level ${this.level}!`;
  }
}






// class Triangle {
//   constructor(side1, side2, side3) {
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }

//   checkType() {
//     //Function body goes here.
//   }    
// }