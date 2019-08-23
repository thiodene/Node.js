// Source:
// https://www.tutorialspoint.com/Kruskal-s-algorithm-in-Javascript

//Now let us look at the implementation of Kruskal's algorithm using this data structure:
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

  //------------------KRUSKAL

  kruskalsMST()
  {

    // Initialize graph that'll contain the MST
    const MST = new Graph();
    this.nodes.forEach(node => MST.addNode(node));
    if (this.nodes.length === 0)
    {
      return MST;
    }

    // Create a Priority Queue
    let edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);

    // Add all edges to the queue
    for (let node in this.edges)
    {
      this.edges[node].forEach (edge => {
        edgeQueue.enqueue([node, edge.node], edge.weight);
      });

    }

    let uf = new UnionFind(this.nodes);

    // Loop until either we explore all nodes or queue is empty
    while (!edgeQueue.isEmpty())
    {
      // Get the edge data using destructing
      let nextEdge = edgeQueue.dequeue();
      //console.log(nextEdge);
      let nodes = nextEdge.element;
      //console.log(nodes);
      let weight = nextEdge.priority;
      //console.log(weight);

      if(!uf.connected(nodes[0], nodes[1]))
      {
        MST.addEdge(nodes[0], nodes[1], weight);
        uf.union(nodes[0], nodes[1]);
      }

    }
    return MST;
  }


}



//You can test this using:

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
g.addEdge("E", "G", 50);

g.kruskalsMST().display();
//This will give the output:

/*
A->B, D
B->A, G
C->D
D->C, A, E
E->D, F
F->E
G->B
*/
