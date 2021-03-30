// BINARY SEARCH

/*
SEARCHING PROBLEM?
Problem: Find out if a list of students contains the last name of "Smith"
Searching Options:
a) search through the list one by one
b) split the list and search through the half that is likely to contain the name.
Which is going to be faster?
WHAT IS BINARY SEARCH?
Binary search is a coding algorithm for finding an item from a sorted
list of items. It can accomplish this by finding the midpoint between two
endpoint values and comparing it to the target. If not the target, it narrows
down the endpoint values until it reports the target position or that the
target is not in the list. It works by repeatedly dividing in half the portion
of the list that could contain the item, until
BINARY SEARCH PSEUDOCODE
1. Let min = 0 and max = list length - 1.
2. While the min is less than or equal to the max, continue
3. Get the midpoint between the min and max values, rounded down so that it is an integer.
4. If the midpoint is the target number, stop.
5. If the midpoint was too low, set min to be the midpoint + 1.
6. If the midpoint was too high, set max to be the midpoint - 1.
7. Go back to step two.
8. If the target is not in the list, return unsuccessful
*/

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(list, targetNum){
  var counter = 0 ;
  var min = 0;
  var max = list.length - 1;

  
  while(max >= min){
    counter += 1; // increases our counter by 1
    var middleNum = Math.floor((min+max) / 2);
    if(list[middleNum] == targetNum){
      console.log("you searched " + counter + " items.");
      return middleNum;
    }
    
    if(list[min] < targetNum){
      min = middleNum + 1;
    } else {
      max = middleNum - 1;
    }
  }
  
  console.log("You searched " + counter + " items.")
  return false;
}
  
// Log each item to see how long it will take to find in the search.
for(var i = 0; i < primes.length; i++){
  binarySearch(primes, primes[i]);
}
