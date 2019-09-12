'use strict';

class UnionFind {

  constructor(elements){
    // Number of disconnected components
    this.count = elements.length;

    // Keep Track of connected compoenents
    this.parent = {};

    // Initialize the data structure such that all ellements have themselves as parents
    elements.forEach(e => (this.parent[e] = e)) ;

  }

  union(a,b){

    let rootA = this.find(a);
    let rootB = this.find(b);

    // Roots are same so these are already connected.
    if (rootA === rootB){
      return;
    }


    // Alaways make the element with the smaller root the parent
    if (rootA < rootB){
      if (this.parent[b] != b)
        this.union(this.parent[b],a) ;
      this.parent[b] = this.parent[a];
    } else {
      if(this.parent[a] != a)
        this.union(this.parent[a],b);
      this.parent[a] = this.parent[b];

    }
  }


  // Returns final parent of a node
  find(a){
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }

  // Checks connectivity of the 2 nodes
  connected(a,b) {
    return this.find(a) === this.find(b);
  }

}

//----------------------------------------------------------------------

function main()
{

  // First Create the Union Find array with all the Nodes (Vertex)
  let u; let v;
  var n = 4;
  var connectionsNum = 4;

  let uf;
  let ufArr = [];
  for (let ufa = 1;ufa<= n; ufa++)
  {
    ufArr.push(String(ufa));
  }
  console.log(ufArr);

  // Now the edges and the number of connection is given
  var newEdges = [[1, 2], [1, 3], [3, 2], [3, 4]];
  var criticalEdge = [];

  // Loop over the Edges removing one each time to see if it is critical to the Server
  let checkEdges = [];
  for (u=0;u<=newEdges.length - 1;u++)
  {

    for(v =0;v<=newEdges.length - 1;v++)
    {
      if (v != u)
        checkEdges.push(newEdges[v]);
    }
    // Now calculate the UnionFind with the checkEdges that has one less connection
    //console.log("Bunch:");
    criticalEdge.push({"Edge":newEdges[u],"MST":checkEdges});

    //console.log(checkEdges);
    //console.log(JSON.stringify(criticalEdge));
    checkEdges = [];

  }

  // Now construct the new union find array
  let criticalConn = [];
  let cc;
  criticalEdge.forEach(function(element){
    uf = new UnionFind(ufArr);
    for(cc=0;cc<=element.MST.length - 1;cc++)
    {
      //console.log(element.MST[cc][0]);
      //console.log(element.MST[cc][1]);
      // Unionize each MST edges and see if the one missing broke the Server
      uf.union(String(element.MST[cc][0]),String(element.MST[cc][1]));
    }
      console.log(uf);
      // Check if the missing connection broke the server or not / If yes add it as a critical connection!
      if (!uf.connected(String(element.Edge[0]),String(element.Edge[1])))
        criticalConn.push([element.Edge[0],element.Edge[1]]);
  });

  // Return result
  console.log(criticalConn);
  return criticalConn;
  //return false;


}


//---------------------------------------------------------------------------------

main();




