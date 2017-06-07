import { expect } from "chai"
import bubbleSort from "../src/bubbleSort"

describe("bubbleSort", function() {

  it("should sort an array using the bubble sort algorithm", function(){
    const output = bubbleSort([10, 2, 7, 5, 3, 6, 1])
    expect(output).to.deep.equal([1, 2, 3, 5, 6, 7, 10])
  })

  it("should sort an array regardless of length", function(){
    const output = bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
    expect(output).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it("should return array if it already sorted", function(){
    const output = bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(output).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})