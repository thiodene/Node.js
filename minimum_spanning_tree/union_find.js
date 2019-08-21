// Source:
// https://www.tutorialspoint.com/Kruskal-s-algorithm-in-Javascript

// Let us look at the implementation of UnionFind or DisjointSet data structure:
class UnionFind {
   constructor(elements) {
      // Number of disconnected components
      this.count = elements.length;

      // Keep Track of connected components
      this.parent = {};

      // Initialize the data structure such that all
      // elements have themselves as parents
      elements.forEach(e => (this.parent[e] = e));
   }

   union(a, b) {
      let rootA = this.find(a);
      let rootB = this.find(b);

      // Roots are same so these are already connected.
      if (rootA === rootB) return;

      // Always make the element with smaller root the parent.
      if (rootA < rootB) {
         if (this.parent[b] != b) this.union(this.parent[b], a);
         this.parent[b] = this.parent[a];
      } else {
         if (this.parent[a] != a) this.union(this.parent[a], b);
         this.parent[a] = this.parent[b];
      }
   }

   // Returns final parent of a node
   find(a) {
      while (this.parent[a] !== a) {
         a = this.parent[a];
      }
      return a;
   }

   // Checks connectivity of the 2 nodes
   connected(a, b) {
      return this.find(a) === this.find(b);
   }
}
//You can test this using:

let uf = new UnionFind(["A", "B", "C", "D", "E"]);
uf.union("A", "B"); uf.union("A", "C");
uf.union("C", "D");

console.log(uf.connected("B", "E"));
console.log(uf.connected("B", "D"));
//This will give the output:
/*
false
true
*/
