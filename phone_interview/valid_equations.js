"use strict";

const UnionFind = require('./union_find_class.js')

//-------------------------------------------------------------------
// This function makes a list of all the different nodes
function listNodes(equals,inequals)
{
  //console.log(equals);

  let nodes = [];

  let getNodes = [];
  // Register the equals Nodes
  for (let i = 0; i<=equals.length - 1;i++)
  {
    getNodes = equals[i].split("=");
    // get Nodes only have 2 parameters
    if (nodes.indexOf(getNodes[0].trim()) == -1)
      nodes.push(getNodes[0].trim());
    if (nodes.indexOf(getNodes[1].trim()) == -1)
      nodes.push(getNodes[1].trim());
  }

  // Register the inequals Nodes
  for (let j=0;j<=inequals.length - 1;j++)
  {
    getNodes = inequals[j].split("!=");
    // get Nodes only have 2 parameters
    if (nodes.indexOf(getNodes[0].trim()) == -1)
      nodes.push(getNodes[0].trim());
    if (nodes.indexOf(getNodes[1].trim()) == -1)
      nodes.push(getNodes[1].trim());
  }


  // Now sort the Nodes before returning
  nodes.sort(function(a,b){
    return a.localeCompare(b);
  });

  return nodes;
}

//-----------------------------------------------------------------
//let uf = new UnionFind(["A","B","C","D","E"]);
//uf.union("A","B");
//uf.union("A","C");
//uf.union("C","D");

//console.log(uf.connected("B","E"));
//console.log(uf.connected("B","D"));

// Build the main function with parameters
function main()
{
  var isValid = true;
  var equals =  ["A = B", "B = D", "C = D", "F = G", "E = H", "H = C"] ;
  //var inequals =  ["A != C", "D != H", "F != A" ];
  var inequals =  ["G != C", "D != G", "F != A" ];

  // First register all the different nodes and list them in an array
  var Nodes = [];
  Nodes = listNodes(equals,inequals);

  console.log(Nodes);

  // Now initalize the union find parameter
  let uf = new UnionFind(Nodes);

  // Now build the unions
  let getNodes = [];
  for (let m=0;m<=equals.length - 1;m++)
  {
    getNodes = equals[m].split("=");
    uf.union(getNodes[0].trim(),getNodes[1].trim());
  }

  console.log(uf);

  // Now check the inqequalities versus the unions -> connection
  getNodes = [];
  for (let n=0;n<=inequals.length - 1;n++)
  {
    getNodes = inequals[n].split("!=");
    if(uf.connected(getNodes[0].trim(),getNodes[1].trim()))
      isValid = false;
  }

  if (isValid)
    console.log("Valid");
  else
    console.log("Invalid");

  // Time Complexity of Union Find algorithm
  //The above operations can be optimized to O(Log n) in worst case. for m operations -> O(mLog n)
  //The idea is to always attach smaller depth tree under the root of the deeper tree. This technique is called union by rank.
  // Sources: https://www.geeksforgeeks.org/union-find-algorithm-set-2-union-by-rank/
  // Source: https://en.wikipedia.org/wiki/Proof_of_O(log*n)_time_complexity_of_union%E2%80%93find
}

// MAIN-------------------------------------------------------------------

main();
