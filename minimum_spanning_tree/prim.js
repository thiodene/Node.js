// Source:
// https://www.tutorialspoint.com/Prim-s-algorithm-in-Javascript

//Now let us see how we can implement the same in our code:
'use strict';

const UnionFind = require('./union_find_class.js');
const PriorityQueue = require('./priority_queue_class.js');

class Graph
{
  constructor()
  {
    this.edges = {};
    this.nodes = [];
  }

  addNode(node)
  {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2, weight)
  {
    weight = typeof weight  !== 'undefined' ? weight : 1;
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }

  addDirectedEdge(node1, node2, weight)
  {
    weight = typeof weight  !== 'undefined' ? weight : 1;
    this.edges[node1].push({ node: node2, weight: weight });
  }

  // Graph without Weight
  //addEdge(node1, node2)
  //{
      //this.edges[node1].push(node2);
      //this.edges[node2].push(node1);
  //}

  //addDirectedEdge(node1, node2)
  //{
     //this.edges[node1].push(node2);
  //}

  display()
  {
    let graph = "";
    this.nodes.forEach(node => {
      graph += node + "->" + this.edges[node].map(n => n.node).join(", ") + "\n";
    });
    console.log(graph);
  }

  //--------------------PRIM-

   primsMST() {
      // Initialize graph that'll contain the MST
      const MST = new Graph();
      if (this.nodes.length === 0) {
         return MST;
      }

      // Select first node as starting node
      let s = this.nodes[0];

      // Create a Priority Queue and explored set
      let edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
      let explored = new Set();
      explored.add(s);
      MST.addNode(s);

      // Add all edges from this starting node to the PQ taking weights as priority
      this.edges[s].forEach(edge => {
         edgeQueue.enqueue([s, edge.node], edge.weight);
      });

      // Take the smallest edge and add that to the new graph
      let currentMinEdge = edgeQueue.dequeue();
      while (!edgeQueue.isEmpty()) {
         // COntinue removing edges till we get an edge with an unexplored node
         while (!edgeQueue.isEmpty() && explored.has(currentMinEdge.element[1])) {
            currentMinEdge = edgeQueue.dequeue();
         }
         let nextNode = currentMinEdge.element[1];
         // Check again as queue might get empty without giving back unexplored element
         if (!explored.has(nextNode)) {
            MST.addNode(nextNode);
            MST.addEdge(currentMinEdge.element[0], nextNode, currentMinEdge.priority);

            // Again add all edges to the PQ
            this.edges[nextNode].forEach(edge => {
               edgeQueue.enqueue([nextNode, edge.node], edge.weight);
            });

            // Mark this node as explored
            explored.add(nextNode);
            s = nextNode;
         }
      }
      return MST;
   }
}



// You can test this using:

let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");


g.addEdge("A", "C", 100);
g.addEdge("A", "B", 3);
g.addEdge("A", "D", 4);
g.addEdge("C", "D", 3);
g.addEdge("D", "E", 8);
g.addEdge("E", "F", 10);
g.addEdge("B", "G", 9);
g.primsMST().display();
// This will give the output:

A->B, D
B->A, G
D->A, C, E
C->D
E->D, F
G->B
F->E
// Note that our Initial graph was:

/**
   *         A
   *       / | \
   *       C | B
   *       \ | |
   *         D G
   *         | /
   *         E
   *         |
   *         F
*/
// Our current graph looks like:

/**
   *         A
   *         |\
   *     C   | B
   *      \  | |
   *       D   G
   *       |
   *       E
   *       |
   *       F
   *
*/
// We've removed the costliest edges and now have a spanning tree.
