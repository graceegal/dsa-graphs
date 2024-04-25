import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

// BFS

// if startNode = endNode, return 0
// if no path available from start to end node, return Infinity
// SOUGHT = H
function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  let fewest = 1;                           // 4
  let toVisit = new Queue([start, fewest]);     // [[I, 1], [H, 1], [I, 2], [H, 2]]
  let visited = new Set();                // [R, T, I]

  while (!toVisit.isEmpty()) {

    let node = toVisit.dequeue();     // node = [I, 1]

    if (!visited.has(node[0])) {
      visited.add(node[0]);
      if (node[0] === sought) {
        return node[1];
      }
    }

    for (const n of node[0].adjacent) {      // [R, T]
      if (!visited.has(n)) {
        toVisit.enqueue([n, fewest]);
      }
    }

    fewest++;
  }

  return fewest;
}

export { fewestEdges };
