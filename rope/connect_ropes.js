'use strict';
const PriorityQueue = require("./priority_queue_class.js");

class ConnectRopes
{

  constructor(arr, n)
  {
    this.arr = arr;
    this.n = n;
  }


  minCost()
  {


    let result = 0;
    // creating object for queue classs
    var priorityQueue = new PriorityQueue();

    // Adding itensms to the Pqueue
    for (let i=0;i<=n - 1;i++)
    {
      // adding elements to the queue
      priorityQueue.enqueue(String(arr[i]), arr[i]);


    }

    console.log(priorityQueue.printPQueue());
    //console.log(priorityQueue.printPQueue().split(" ").length);
    //return false;

    let first;
    let second;
    while (priorityQueue.printPQueue().trim().split(" ").length > 1)
    {
     // Extract shortest two reposes from Priority Queue
      first = priorityQueue.dequeue().element ;
      second = priorityQueue.dequeue().element ;

      result += parseInt(first) + parseInt(second);
      priorityQueue.enqueue(String(parseInt(first) + parseInt(second)), parseInt(first) + parseInt(second));

      console.log(priorityQueue.printPQueue());

    }

    return result;

  }

}


//var arr = [4,3,2,6];  // 29
//var arr = [8, 4, 6, 12];  // 58
//var arr = [20, 4, 8, 2];  // 54
//var arr = [1, 2, 5, 10, 35, 89];  // 224
var arr = [2, 2, 3, 3];  // 20

var n = arr.length;
var ropes = new ConnectRopes(arr,n);


console.log(ropes.minCost());
