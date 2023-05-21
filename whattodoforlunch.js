
function whatToDoForLunch(hungry, availableTime) {
  if (hungry) {
    if (availableTime <= 20) {
      console.log("Pickup lunch and eat back at the lab")
    }
    if (availableTime > 20 && availableTime <= 30) {
      console.log("You deserve a break, try a place in Gastown.")
    }
    if (availableTime > 30) {
      console.log("Grab quick lunch and get back to work.")
    }
  } else {
    console.log("Work until you're hungry.")
  }
}

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("Eat");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("joy");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("me");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);