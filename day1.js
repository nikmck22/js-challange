function addBorder(array) {
  var star = "*"
  array.push(star)
  array.unshift(star)
  var array = array.concat(star)
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