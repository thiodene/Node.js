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


module.exports = UnionFind;
