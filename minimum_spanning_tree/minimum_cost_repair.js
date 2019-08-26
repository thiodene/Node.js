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

//----------------------------------------------------------------------

function main()
{

  //// Example 1
  //var n  = 5;
  //var connectedEdges = [[2,3],[4,5]];
  //var newEdges = [[1,2,12],[3,4,30],[1,5,8]];
  //var connectedWeight = 0;

  //// Example 2
  //var n  = 6;
  //var connectedEdges = [[1,2],[2,3],[4,5],[3,5]];
  //var newEdges = [[1,6,410],[2,4,800]];
  //var connectedWeight = 0;

  // Example 3
  var n  = 6;
  var connectedEdges = [[1,2],[2,3],[4,5],[5,6]];
  var newEdges = [[1,5,110],[2,4,84],[3,4,79]];
  var connectedWeight = 0;


  var repairCost = 0;
  var totalCost = 0;
  var gp;
  var j;

  // First Add nodes to a new Graph
  var g = new Graph();
  for(let i=1;i<=n;i++)
  {
    g.addNode(String(i));
  }

  // Now add the currently connected Edges
  connectedEdges.forEach(function(element){
    g.addEdge(String(element[0]),String(element[1]));
    connectedWeight++;
  });

  // Now add the Edges to connecte for building an MST
  newEdges.forEach(function(element){
    g.addEdge(String(element[0]),String(element[1]), element[2]);
  });

  g.display();

  //console.log(JSON.stringify(g.primsMST()));
  //g.primsMST().display();

  // Get the MST of Prim's algorithm
  gp = g.primsMST();

  console.log(gp.edges[1]);

  gp.nodes.forEach(function(element){
    //console.log(gp.edges[element]);

    //console.log(gp.edges[element].length);

    for(j=0;j<=gp.edges[element].length - 1;j++)
    {
      totalCost += gp.edges[element][j].weight;
    }

  });

  //console.log(totalCost);

  // Now calculate the total cost after reparation
  repairCost = totalCost/2 - connectedWeight;
  console.log(repairCost);


  //gp.edges.forEach(function(element){
    //console.log(element);
  //});

  //console.log(gp);
}


//---------------------------------------------------------------------------------

main();

