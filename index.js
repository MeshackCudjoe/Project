document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    //  form submission behavior
    event.preventDefault();

    // Getting the values from the input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a user object to store
    const user = {
      email: email,
      password: password,
    };

    try {
      // Checking if a user with this email already exists
      const existingUsers = JSON.parse(localStorage.getItem("users")) || {};
      if (existingUsers[email]) {
        alert(
          "An account with this email already exists. Please login or use a different email."
        );
        return;
      }

      // Store the new user in localStorage
      existingUsers[email] = user;
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // Show a success message
      alert("Registration successful! You can now log in.");

      // Redirect to the login page
      window.location.href = "login.html";
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  });
