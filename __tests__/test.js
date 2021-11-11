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
})



// this.level += 1;