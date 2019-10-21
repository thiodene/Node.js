'use strict';
// User defined class node
class Node
{
  // constructor
  constructor(element)
  {
    this.element = element;
    this.next = null
  }
}



// linkedlist class
class LinkedList
{
  constructor(list)
  {
    this.head = list || null;
  }


  // Function to insert The new Node into the linkedList
  insert(data)
  {

    // Check if the linked list is empty
    // so insert first node and lead head
    // points to generic node
    if (this.head === null)
      this.head = new Node(data);
    else
    {

      // If linked list is not empty, insert the node
      // at the end of the linked list
      let list = this.head;
      while (list.next)
      {
        list = list.next;
      }

      // Now here list pointer points to last
      // node let’s insert out new node in it
      list.next = new Node(data);
    }
  }

// Function to print linkedList
  iterate()
  {

    // First we will check whether out
    // linked list is empty or node
    if (this.head === null)
      return null;

    // If linked list is not empty we will
    // iterate from each Node and prints
    // it’s value store in “data” property

    let list = this.head;

    // we will iterate until our list variable
    // contains the “Next” value of the last Node
    // i.e-> null
    while (list)
    {
       //document.write(list.node);
       console.log(list.node);
       if (list.next)
         console.log(' -> ');
         //document.write(' -> ');
       list = list.next;
     }
  }


  // Function to mergesort a linked list
  mergeSort(list)
  {
    console.log(list);
    if (list.next === null)
      return list;

    let count = 0;
    let countList = list;
    let leftPart = list;
    let leftPointer = list;
    let rightPart = null;
    let rightPointer = null;

    // Counting the nodes in the received linkedlist
    while (countList.next !== null)
    {
      count++;
      countList = countList.next;
    }

    // counting the mid of the linked list
    let mid = Math.floor(count / 2);
    let count2 = 0;

    // separating the left and right part with
    // respect to mid node in tke linked list
    while (count2 < mid)
    {
      count2++;
      leftPointer = leftPointer.next;
    }

    rightPart = new LinkedList(leftPointer.next);
    leftPointer.next = null;

    // Here are two linked list which
    // contains the left most nodes and right
    // most nodes of the mid node
    return this._mergeSort(this.mergeSort(leftPart),
      this.mergeSort(rightPart.head));
  }


  // Merging both lists in sorted manner
  _mergeSort(left, right)
  {

    // Create a new empty linked list
    let result = new LinkedList();

    let resultPointer = result.head;
    let pointerLeft = left;
    let pointerRight = right;


    // If true then add left most node value in result,
    // increment left pointer else do the same in
    // right linked list.
    // This loop will be executed until pointer's of
    // a left node or right node reached null
    while (pointerLeft && pointerRight)
    {
      let tempNode = null;

      // Check if the right node's value is greater than
      // left node's value
      if (pointerLeft.node > pointerRight.node)
      {
        tempNode = pointerRight.node;
        pointerRight = pointerRight.next;
      }
      else
      {
        tempNode = pointerLeft.node;
        pointerLeft = pointerLeft.next;
      }

      if (result.head == null)
      {
        result.head = new Node(tempNode);
        resultPointer = result.head;
      }
      else
      {
        resultPointer.next = new Node(tempNode);
        resultPointer = resultPointer.next;
      }
    }

    // Add the remaining elements in the last of resultant
    // linked list
    resultPointer.next = pointerLeft;
    while (resultPointer.next)
    {
      resultPointer = resultPointer.next;

      resultPointer.next = pointerRight;
    }
    // Result is  the new sorted linked list
    return result.head;
  }

  // PrintList
  // prints the list items
  printList()
  {
    var curr = this.head;
    var str = "";
    while (curr)
    {
      if (str.length > 0)
        str += " -> " + curr.element ;
      else
        str += curr.element;

      curr = curr.next;
    }
    console.log(str);
  }



}


// Build the main function
function main()
{

  // Initialize the object
  var ll = new LinkedList();
  ll.insert(10);
  ll.insert(20);
  ll.insert(3);
  ll.insert(2);
  ll.insert(1);
  console.log(JSON.stringify(ll));
  // Print the linked list
  //ll.iterate();
  ll.printList();

  // Sort the linked list
  ll.head = mergeSort(ll.head);
  //ll.head = ll.mergeSort(ll.head);

  console.log(JSON.stringify(ll));

  //document.write('<br> After sorting : ');
  //console.log('<br> After sorting : ');

  // Print the sorted linked list
  //ll.iterate()

}

// MAIN----------------------------------------------------------------------------------

main();
