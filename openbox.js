const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

// Sleep function using a Promise
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

myButton.addEventListener("click", async function() {
  myImg.src = "openhextech.gif"; // Change the image source
  await sleep(1500); // Wait for 2 seconds (adjust as needed)
  window.location.href = "stickynotes.html"; // Redirect to another page
});
