import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestsPair()', function(){

  it('should be a function', function(){
     expect(bubbleSort).to.be.a('function')
  })

  it('returns the closest pair of a given graph', function(){
    const points = [[1, 1], [1, 3], [1, 5], [1, 0]
    let a = closestPair(points)
    return a
    expect(points).to.be.an('array')
    expect(a).to.equal({ pair: [[1, 1], [1, 0]], distance: 1 })
  })
})
