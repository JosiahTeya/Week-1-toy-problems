function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + points);
    }
  }
  
  // Example usage
  calculateDemeritPoints(80); // Output: "Points: 2"
  calculateDemeritPoints(65); // Output: "Ok"
  calculateDemeritPoints(150); // Output: "License suspended"
  