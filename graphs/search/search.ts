import { UGraphNodeStr } from "../graph/graph";
import { Stack } from "../common/stack";
import { QueueStr } from "../common/queue";
import { Queue } from "../common/queue";

/** Return array of nodes' values, in DFS order (recursive version)  */

function rDfs(
  start: UGraphNodeStr,
  result: string[] = [start.value],
  visited = new Set([start])): string[] {

  for (const n of start.adjacent) {
    if (!visited.has(n)) {
      result.push(n.value);
      visited.add(n);
      rDfs(n, result, visited);
    }
  }

  return result;
}

/** Return array of nodes' values, in DFS order (iterative version)  */

//    a
//   / \
//  b   c
//      \
//      d

//    a - b
//    |   |
//    c - d

function iDfs(start: UGraphNodeStr): string[] { // start = a
  let result: string[] = [];                 // result: [a, c, d, b]
  let toVisit = new Stack([start]);           // toVisit: []
  let visited = new Set();                   // visited: [a, c, d, b]

  while (!toVisit.isEmpty()) {
    let node = toVisit.pop();         // node = b (adjacent= [])

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node.value);
    }

    for (const n of node.adjacent) {      //d
      if (!visited.has(n)) {
        toVisit.push(n);
      }
    }
  }

  return (result);
}

/** Return array of nodes' values, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): string[] {
  let result: string[] = [];                 // result: [a, c, d, b]
  let toVisit = new Queue([start]);           // toVisit: []
  let visited = new Set();                   // visited: [a, c, d, b]

  while (!toVisit.isEmpty()) {
    let node = toVisit.dequeue();         // node = b (adjacent= [])

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node.value);
    }

    for (const n of node.adjacent) {      //d
      if (!visited.has(n)) {
        toVisit.enqueue(n);
      }
    }
  }

  return (result);


}


export { iDfs, rDfs, bfs };