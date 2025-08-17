document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    // form submission behavior
    event.preventDefault();

    // Getting the values from the input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessageDiv = document.getElementById("errorMessage");

    try {
      // Getting all registered users from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || {};

      // Check if the user exists and the password is correct
      if (users[email] && users[email].password === password) {
        // Store the logged-in user's email in sessionStorage
        sessionStorage.setItem("loggedInUser", email);

        // Redirect to the home page
        window.location.href = "home.html";
      } else {
        // Show an error message for incorrect credentials
        errorMessageDiv.textContent =
          "Invalid email or password! Please try again.";
        errorMessageDiv.style.display = "block";
      }
    } catch (error) {
      console.error("Error during login:", error);
      errorMessageDiv.textContent = "An error occurred. Please try again.";
      errorMessageDiv.style.display = "block";
    }
  });
