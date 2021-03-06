import Character from './../src/js/business.js';

describe('Character', () => {

  test('should correctly create a character object with a name, a type, and a level', () => {
    const myCharacter = new Character('Gandalf', 'Wizard', 9);
    expect(myCharacter.name).toEqual('Gandalf');
    expect(myCharacter.type).toEqual('Wizard');
    expect(myCharacter.level).toEqual(9);
  });
  test("Should display charector information with name, type and level", () => {
    const myCharacter = new Character('Gandalf', 'Wizard', 9);
    expect(myCharacter.characterInfo()).toEqual("Your character is Gandalf, he is a great Wizard at level 9!");
  });
  test("Should add one to character's current level", () => {
    const myCharacter = new Character('Gandalf', 'Wizard', 9);
    expect(myCharacter.levelUp()).toEqual(10);
  });
  test("Should have a current and max life point value", () => {
    const myCharacter = new Character('Gandalf', 'Wizard', 9, 20);
    expect(myCharacter.maxLife).toEqual(20);
    expect(myCharacter.currentLife).toEqual(20);
  });
  test("Should lower a current life because of the damaging", () => {
    const myCharacter = new Character('Gandalf', 'Wizard', 9, 20);
    myCharacter.takeDamage(2);
    expect(myCharacter.currentLife).toEqual(18);
  });
});



// this.level += 1;