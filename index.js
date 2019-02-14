function dwarfRollCall(dwarves) {
 dwarves = ["Dopey", "Grumpy", "Bashful"]
  var numbersNames = []
  for (var i = 0; i < dwarves.length; i++) {
    numbersNames.push(`${i + 1}. ${dwarves[i]}`)
  }
 return `${numbersNames.join(' ')}` 
}

function summonCaptainPlanet(planeteerCalls){
 planeteerCalls = ["apple", "banana", "orange"]
  var calls = []
  for (var i = 0; i < planeteerCalls.length; i++)
  {
    calls.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return calls
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
