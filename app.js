var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var submitBtn = document.getElementById("submit");
var checkBox = document.getElementById("checkbox");

submitBtn.disabled = true;
firstName.addEventListener("input", handleSubmit);
lastName.addEventListener("input", handleSubmit);
function handleSubmit() {
  if (firstName.length && lastName.length < 0) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
var emailField = document.getElementById("email"); // Reference to the email field

checkBox.addEventListener("change", toggleEmailField); // Add event listener for checkbox

// Function to toggle the email field based on checkbox state

function toggleEmailField() {
  if (checkBox.checked) {
    emailField.style.display = "block"; // Show email field
  } else {
    emailField.style.display = "none"; // Hide email field
  }
}
function displayUsers(data) {
  const container = document.getElementById("user-container");
  container.innerHTML = ""; // Clear previous content
  data.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Company: ${user.company.name}</p>
      <hr>
    `;
    container.appendChild(userDiv);
  });
}
async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users/"; // Example URL
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    displayUsers(data);
  } catch (error) {
    console.error(error.message);
  }
}
getData(); // Call the function to fetch data
