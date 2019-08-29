'use strict';

// Implementation of Queue in Javascript
// In This article, we would be implementing Queue data structure in javascript.
// A Queue works on the FIFO(First in First Out) principle. Hence,
// it performs two basic operations that is addition of elements at the end
// of the queue and removal of elements from the front of the queue. Like Stack, Queue is also a linear data structure.

// Note: Assuming a queue can grow dynamically we are not considering the overflow condition

// Queue class
class Queue
{
  // Array is used to implement a Queue
  constructor()
  {
    this.items = [];
  }

  // Functions to be implemented
  // enqueue(item)
  enqueue(element)
  {
    // adding element to the queue
    this.items.push(element);
  }

  // dequeue()
  dequeue()
  {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if(this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }

  // front()
  front()
  {
    // returns the Front element of
    // the queue without removing it.
    if(this.isEmpty())
      return "No elements in Queue";
    return this.items[0];
  }

  // isEmpty()
  isEmpty()
  {
    // return true if the queue is empty.
    return this.items.length == 0;
  }

  // printQueue()
  printQueue()
  {
    var str = "";
    for(var i = 0; i < this.items.length; i++)
      str += this.items[i] +" ";
    return str;
  }


}


module.exports = Queue;
