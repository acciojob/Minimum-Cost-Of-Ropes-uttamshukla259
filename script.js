function findMinCost(arr) {
  // Create a priority queue to store the ropes lengths
  const pq = new MinPriorityQueue();

  // Add all the ropes to the priority queue
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i]);
  }

  // Connect the ropes until only one rope is left in the priority queue
  let cost = 0;
  while (pq.size() > 1) {
    // Remove the two smallest ropes from the priority queue
    const rope1 = pq.dequeue().element;
    const rope2 = pq.dequeue().element;

    // Calculate the cost of connecting the ropes
    const newRope = rope1 + rope2;
    cost += newRope;

    // Add the new rope to the priority queue
    pq.enqueue(newRope);
  }

  // Return the minimum cost
  return cost;
}

// Get the input from the user
const input = prompt("Enter comma separated lengths of ropes:");

// Parse the input into an array of integers
const arr = input.split(",").map((x) => parseInt(x));

// Find the minimum cost of connecting the ropes
const minCost = findMinCost(arr);

// Display the result in the output div
const outputDiv = document.getElementById("result");
outputDiv.innerText = `Minimum cost of connecting the ropes: ${minCost}`;