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

  //let uf = new UnionFind(["A","B","C","D","E"]);
  //uf.union("A","B");
  //uf.union("A","C");
  //uf.union("C","D");

  //console.log(uf.connected("B","E"));
  //console.log(uf.connected("B","D"));


  //var n = 3;
  //var newEdges =  [[1,2,5],[1,3,6],[2,3,1]] ;

  //var n = 4;
  //var newEdges = [[1,2,3],[3,4,4]];

  var n = 4;
  var newEdges = [[1,2,3],[3,4,4],[2,3,1]];


  // Create the union find array
  let ufArr = [];
  for(let q=1; q<=n;q++)
    ufArr.push(String(q));
  console.log(ufArr);
  //return ufArr;


  let uf;
  uf = new UnionFind(ufArr);
  // Now add the connections
  newEdges.forEach(function(element){
    uf.union(String(element[0]),String(element[1]));
  });

  // Check if all Nodes are connected!
  let mCost = 0;
  let pCost = 0;
  let mstConnect;
  if (newEdges.length < n - 1)
  {
    console.log(-1);
    return -1
  }
  else if (newEdges.length == n - 1)
  {
    // If newEdges equals n - 1 it's already MST! so calculate minimum Cost as is!
    newEdges.forEach(function(element){
      mCost += element[2];
    });
    console.log(mCost);
    return mCost;
  }
  else
  {
    // If number of Edges is above n - 1 then remove one Edges and calculate minimum cost
    // Let's assume it is n max value
    let i;
    let j;
    let critical = [];
    let mstArr = [];
    for (i = 1;i<=newEdges.length;i++)
    {
       uf = new UnionFind(ufArr);
       console.log(uf);
       for (j=1;j<=newEdges.length;j++)
       {
         if (i != j)
         {
           uf.union(String(i),String(j));
           mstArr.push(newEdges[j-1]);
           console.log(newEdges[1]);
         }
       }
       critical.push({"Edge":[newEdges[i-1][0],newEdges[i-1][1]],"MST":mstArr});

       mstArr = [];
    }
    console.log(JSON.stringify(critical));
    let pCost ;
    let mstConnect ;
    let k;
    let mCost = 1000000;
    // Now calculate the MST if all egdges are connected
    critical.forEach(function(element){
      //console.log(element.MST.length);
      pCost = 0;
      mstConnect = true;
      for (k=0;k<=element.MST.length - 1;k++)
      {
        if (!uf.connected(String(element.MST[k][0]),String(element.MST[k][1])))
        {
          mstConnect = false;
        }
        pCost += element.MST[k][2];

      }
      //console.log(pCost);
      //console.log(element.MST[k]);
     // If MST connected then save pCost
      if (mstConnect && pCost < mCost)
        mCost = pCost;
    });

    console.log(mCost);
  }















}


//---------------------------------------------------------------------------------

main();
