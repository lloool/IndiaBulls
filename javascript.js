// Signup form
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstname = document.getElementById("Firstname").value;
  const Lastname = document.getElementById("Lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Save the signup details to a database or server-side API
  saveSignupDetails(Firstname, email, password);

  // Clear the form fields
  signupForm.reset();

  // Display a success message
  alert("Signup successful!");
});

function saveSignupDetails(username, email, password) {
  // Replace this with your own logic to save the signup details
  // to a database or server-side API
  console.log(`Signing up ${username} with email ${email}`);
}

// Login form
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve the login details from a database or server-side API
  const storedUser = retrieveLoginDetails(username, password);

  if (storedUser) {
    // Redirect to the dashboard page after successful login
    window.location.replace("/dashboard");
  } else {
    // Display an error message if the login fails
    alert("Invalid username or password");
  }
});

function retrieveLoginDetails(username, password) {
  // Replace this with your own logic to retrieve the login details
  // from a database or server-side API
  const storedUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ];

  return storedUsers.find((user) => user.username === username && user.password === password);
}