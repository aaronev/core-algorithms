import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function () {
  it('should be a function', function() {
    expect(mergeSort).to.be.a('function')
  })

  it('should sort an array from smallest to largest', function() {
    const array = [10, 24, 43, 2, 1, 5, 23]
    expect(mergeSort(array)).to.be.deep.equal([1, 2, 5, 10, 23, 24, 43])
  })

  it('should return array if it is already sorted', function() {
  	const array = [1, 2, 5, 10, 23, 24, 43]
  	expect(mergeSort(array)).to.be.deep.equal([1, 2, 5, 10, 23, 24, 43])
  })
})