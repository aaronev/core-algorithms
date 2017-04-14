import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function() {

  it('should be a function', function() {
    expect(fibonacci).to.be.a('function')
  })
  
  it('returns [0, 1] if number is 0 or 1', function() {
    expect(fibonacci(1)).to.be.an('array')
    expect(fibonacci(1)).to.be.deep.equal([0, 1])
  })

  it('returns the fibonacci sequence of a given number', function() {
    expect(fibonacci(4)).to.be.an('array')
    expect(fibonacci(4)).to.be.deep.equal([0, 1, 1, 2])
  })
})
