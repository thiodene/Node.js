'use strict';

class Graph
{

  constructor(noOfVertices)
  {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  // Add Vertices to the Graph
  addVertex(v)
  {
    this.AdjList.set(v, []);
  }

  // Add edge to the Graph
  addEdge(v, w, x)
  {
    // Add the weight value for both Edges
    this.AdjList.get(v).push({"Edge":w,"Weight":x});
    this.AdjList.get(w).push({"Edge":v,"Weight":x});
  }

  printGraph()
  {
    // get all the Vertices
    var get_keys = this.AdjList.keys();

    // Iterate over the vertices
    for (var i of get_keys)
    {
      var get_values = this.AdjList.get(i);
      var conc = "";

      for (var j of get_values)
        conc += j.Edge + "(" + j.Weight + ")" + " " ;

      console.log(i + " -> " + conc);

    }

  }

}


//----------------------------------------------------------------------

var g = new Graph(6);
var vertices = ["A","B","C","D","E","F"];

g.addVertex(vertices[0]);
g.addVertex(vertices[1]);
g.addVertex(vertices[2]);
g.addVertex(vertices[3]);
g.addVertex(vertices[4]);
g.addVertex(vertices[5]);

g.addEdge('A','B',10);
g.addEdge('A','D',5);
g.addEdge('A','E',20);
g.addEdge('B','C',16);
g.addEdge('D','E',7);
g.addEdge('E','F',1);
g.addEdge('E','C',9);
g.addEdge('C','F',12);

g.printGraph();
