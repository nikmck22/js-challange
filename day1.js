function addBorder(array) {
  const wall = '*'.repeat(array[0].length + 2);
  array.unshift(wall);
  array.push(wall);
  for(let i = 1; i < array.length - 1; i++) {
    array[i] = '*'.concat(array[i], '*');
  }
  return array;
}



/**
* Test Suite 
*/
describe('addBorder()', () => {
  it('adds a border around entire application', () => {
      // arrange
      const strings = ['abc', 'ded'];
      
      // act
      const result = addBorder(strings);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toEqual(
              ["*****",
              "*abc*",
              "*ded*",
              "*****"]
      );
  })
});