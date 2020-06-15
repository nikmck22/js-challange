function addBorder(array) {
  //  write code here.
  return 'Hello';
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