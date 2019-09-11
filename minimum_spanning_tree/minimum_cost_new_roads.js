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


//----------------------------------------------------------------------

function main()
{

  var n = 3;
  var newEdges =  [[1,2,5],[1,3,6],[2,3,1]] ;

  //var n = 4;
  //var newEdges = [[1,2,3],[3,4,4]];

  // First verify if the total amount of edges is at least n - 1 vertices!
  if (newEdges.length < n - 1)
  {
    console.log(-1);
    return -1;
  }

  var connectedCost = 0;
  var mstCost = 0;
  var miniCost = 0;
  let j;


  // First Add nodes to a new Graph
  var g = new Graph();
  for(let i=1;i<=n;i++)
  {
    g.addNode(String(i));
  }

  // Now add the Edges to connecte for building an MST
  newEdges.forEach(function(element){
    g.addEdge(String(element[0]),String(element[1]), element[2]);

  });

  g.display();
  // Create the Kruskal MST Graph and save it
  let gk = g.kruskalsMST();

  gk.display();

  // Calculated the new connected cost after MST Kruskal
  gk.nodes.forEach(function(element){
    for(j=0;j<=gk.edges[element].length - 1;j++)
    {
      mstCost += gk.edges[element][j].weight;
      console.log(gk.edges[element][j]);
    }
    //console.log(gk.edges[element]);
    //mstCost += gk.edges[element].weight;
  });


  miniCost = mstCost/2;
  console.log(miniCost);
  return miniCost;
}

//---------------------------------------------------------------------------------

main();
