
// Java program to print leaf nodes from right to left  
import java.util.*; 
  
class GFG 
{ 
      
// A Binary Tree Node  
static class Node  
{  
    int data;  
    Node left, right;  
};  
  
// Utility function to create a new tree node  
static Node newNode(int data)  
{  
    Node temp = new Node();  
    temp.data = data;  
    temp.left = temp.right = null;  
    return temp;  
}  
  
// Function to print leaf  
// nodes from right to left  
static void printLeafNodes(Node root)  
{  
    // If node is null, return  
    if (root == null)  
        return;  
  
    // If node is leaf node, print its data  
    if (root.left == null && root.right == null)  
    {  
        System.out.print( root.data +" ");  
        return;  
    }  
  
    // If right child exists, check for leaf  
    // recursively  
    if (root.right != null)  
        printLeafNodes(root.right);  
  
    // If left child exists, check for leaf  
    // recursively  
    if (root.left != null)  
        printLeafNodes(root.left);  
}  
  
// Driver code  
public static void main(String args[]) 
{  
    Node root = newNode(1);  
    root.left = newNode(2);  
    root.right = newNode(3);  
    root.left.left = newNode(4);  
    root.left.right = newNode(5);  
    root.right.left = newNode(6);  
    root.right.right = newNode(7);  
    root.left.left.left = newNode(8);  
    root.right.right.left = newNode(9);  
    root.left.left.left.right = newNode(10);  
  
    printLeafNodes(root);  
}  
}  
  
// This code is contributed by Arnab Kundu 
