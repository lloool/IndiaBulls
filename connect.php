<?php
// Database connection details
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "indiabulls";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Check if form data is set
if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Hash the password
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  // Prepare and bind statement
  $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
  $stmt->bind_param("ss", $username, $hashed_password);

  // Execute statement
  $stmt->execute();
  echo "Connection Successfully...";
} else {
  echo "Form data not set";
}

// Close statement and connection
$stmt->close();
$conn->close();

// Redirect to success page
header("Location: success.html");
?>