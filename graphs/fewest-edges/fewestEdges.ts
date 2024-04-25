import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

// BFS

// if startNode = endNode, return 0
// if no path available from start to end node, return Infinity
// SOUGHT = H
function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {
  // let fewest = 1;                           // 4
  let toVisit = new Queue<[UGraphNodeStr, number]>([[start, 0]]);//[  [T,2], [H,2]]
  let visited = new Set();//[R,I, T, H]

  while (!toVisit.isEmpty()) {

    let [node, numEdges] = toVisit.dequeue(); // H, 1

    if (!visited.has(node)) {
      visited.add(node);
      if (node === sought) {
        return numEdges;
      }
    }

    for (const n of node.adjacent) {      // [H]
      if (!visited.has(n)) {
        toVisit.enqueue([n, numEdges + 1]);
      }
    }

  }
  return Infinity;
}

export { fewestEdges };
