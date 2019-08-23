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

}

//----------------------------------------------------------------------

var g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");


g.addEdge("A","C",100);
g.addEdge("A","B",3);
g.addEdge("A","D",4);
g.addEdge("C","D",3);
g.addEdge("D","E",8);
g.addEdge("E","F",10);
g.addEdge("B","G",9);
g.addEdge("E","G",50);

g.display();

