import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function() {

  it('should be a function', function() {
     expect(binarySearch).to.be.a('function')
  })

  it('returns position of a given number in a binary tree', function() {
    const numbers = [1, 2, 3, 4, 5, 10, 11, 24]
    expect(numbers).to.be.an('array')
    expect(binarySearch(numbers, 10)).to.equal(5)
  })

  it('returns position of a given number in a odd binary tree', function() {
    const numbers = [1, 2, 3, 4, 5, 10, 11]
    expect(numbers).to.be.an('array')
    expect(binarySearch(numbers, 4)).to.equal(3)
  })

  it('returns -1 if number is not found', function() {
    const numbers = [1, 3, 4, 10, 24, 2, 5, 11]
    expect(numbers).to.be.an('array')
    expect(binarySearch(numbers, 6)).to.equal(-1)
  })
})
