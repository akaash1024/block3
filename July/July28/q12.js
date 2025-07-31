// Simulate data fetching
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // 50% chance
      if (isSuccess) {
        resolve("Fetched data successfully!");
      } else {
        reject(new Error("Failed to fetch data."));
      }
    }, 1000); // simulate 1 second delay
  });
}

// Handle the async function
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

// Call the handler
fetchDataHandler();
