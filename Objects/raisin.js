// Pair Programming - Raisin' Arizona by @gckey and @Sebas024

const raisinAlarm = function(cookie) {
  // Iterate through the cookie
  for (let i = 0; i < cookie.length; i++) {
    // Check if a cookie has a raisin
    if (cookie[i] === "🍇") {
      return "Rasisin alert";
    }
  }
  return "All good!";
};

// Test code
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// Stretch
const raisinAlarmArray = function(cookie) {
  const result = [];
  for (let cookies of cookie) {
    for (let ingredient of cookies) {
      if (ingredient === "🍇") {
        result.push("Rasisin alert");
        break;
      }
    }
  }
  result.push("All good!");
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);



// me