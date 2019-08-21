const expect = require('chai').expect;
const sort = require('../sort');

describe('Sort function', () => {
  it('should sort an array', () => {
    expect(sort([10, 9, 8, 7, 6])).to.eql([6, 7, 8, 9, 10]);
  });

});
