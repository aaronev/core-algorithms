export default function isConnectedGraph(graph) {
  var keys = Object.keys(graph)
  var minPairs = (keys.length - 1) * 2
  var connects = 0
  var point = Object.values(graph)
  for (var vert in graph) {
    point.map(function(point){ if (point.includes(vert)) connects++ } )
  }
  return connects >= minPairs
}