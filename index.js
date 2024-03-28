// Code your solution in this file!
// index.js

// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  // Function to calculate distance from headquarters in feet
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; // 1 block = 264 feet
  }
  
  // Function to calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // 1 block = 264 feet
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    
    if (distance <= 400) {
      fare = 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  
    

