import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function() {

  it('should be a function', function() {
    expect(setComplement).to.be.a('function')
  })

  it('returns complement of two sets with different lengths', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8, 9]
    expect(setComplement(a, b)).to.be.deep.equal([6, 8, 9])
  })

  it('should return the complement of two sets', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setComplement(a, b)).to.be.deep.equal([6, 8])
  })
})
