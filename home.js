// Display welcomr message
const welcomeMessageElement = document.getElementById("welcomeMessage");
const logoutButton = document.getElementById("logoutButton");

// user logged in
const loggedInUserEmail = sessionStorage.getItem("loggedInUser");

//  redirect to the login page if user not found
if (!loggedInUserEmail) {
  window.location.href = "login.html";
} else {
  // If a user is logged in, display the welcome message with their email
  welcomeMessageElement.textContent = `Welcome, ${loggedInUserEmail}!`;
}

// event listener to logout button
logoutButton.addEventListener("click", function () {
  // logging out user
  sessionStorage.removeItem("loggedInUser");

  // Redirect to the login page
  window.location.href = "login.html";
});
