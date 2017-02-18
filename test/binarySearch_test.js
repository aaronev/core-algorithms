import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function() {

  it('should be a function', function() {
     expect(binarySearch).to.be.a('function')
  })

  it('returns position of a given number in a binary tree', function() {
    const numbers = [1, 3, 4, 10, 24, 2, 5, 11]
    const bS = binarySearch(numbers, 10)
    expect(numbers).to.be.an('array')
    expect(bS).to.equal(3)
  })

  it('returns "Not Found" if number is not found', function() {
    const numbers = [1, 3, 4, 10, 24, 2, 5, 11]
    const bS = binarySearch(numbers, 6)
    expect(numbers).to.be.an('array')
    expect(bS).to.equal('Not Found')
  })
})
