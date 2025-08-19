document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const termsAccepted = document.getElementById("terms").checked;
    const errorMessageDiv = document.getElementById("errorMessage");
    errorMessageDiv.style.display = "none"; // Hide error message by default

    if (password !== confirmPassword) {
      errorMessageDiv.textContent = "Passwords do not match. Please try again.";
      errorMessageDiv.style.display = "block";
      return;
    }

    if (!termsAccepted) {
      errorMessageDiv.textContent =
        "You must accept the terms and conditions to register.";
      errorMessageDiv.style.display = "block";
      return;
    }

    const user = {
      email: email,
      password: password,
    };

    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || {};
      if (existingUsers[email]) {
        errorMessageDiv.textContent =
          "An account with this email already exists. Please login or use a different email.";
        errorMessageDiv.style.display = "block";
        return;
      }

      existingUsers[email] = user;
      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert("Registration successful! You can now log in.");

      window.location.href = "login.html";
    } catch (error) {
      console.error("Error during registration:", error);
      errorMessageDiv.textContent =
        "An error occurred during registration. Please try again.";
      errorMessageDiv.style.display = "block";
    }
  });
