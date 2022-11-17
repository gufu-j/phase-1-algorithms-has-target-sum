function hasTargetSum(array, target) {
  
 // iterate through each number in the erray
for (let i=0; i < array.length; i++) {
  // for the current num, identify a complement that adds
  //to the target ( comp = target -num)

  const complement = target - array[i];
    // iterate through the rest of the erray
  for ( let j = i + 1; j < array.length; j++ ){
    // check if any number is our complement
    // if so, return true 

    if (array[j] === complement) return true;

  }

}
 // if I reach the end of the array, return false
  return false;
}



















/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25)
  iterate trough each number in the erray
  for the cuurent num, identify complement that adds to the target (comp = target - num)
  iterate through the rst of the erray
  check if any number is our complement
  if so, return true 

  if I reach the end of the erray, return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
