const expect = require('chai').expect;
const sort = require('../sort');

describe('Sort function', () => {
  it('should sort numbers from low to high', () => {
    expect(sort([1.2, -9.3, 0, 8, 7, 6])).to.eql([-9.3, 0, 1.2, 6, 7, 8]);
  });

  it('should sort strings alphabetically, case-sensitively', () => {
    expect(sort(['Stuff', 'zebras', 'Ben', 'andrew'])).to.eql([
      'Ben',
      'Stuff',
      'andrew',
      'zebras'
    ]);
  });

  it('should work with duplicates', () => {
    expect(sort([1.2, 1.2, 1.2, -9.3, -9.3, -9.3, 0, 8, 7, 6])).to.eql([
      -9.3,
      -9.3,
      -9.3,
      0,
      1.2,
      1.2,
      1.2,
      6,
      7,
      8
    ]);
  });
});
