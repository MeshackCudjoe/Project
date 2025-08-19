document.addEventListener("DOMContentLoaded", function () {
  const rememberMeCheckbox = document.getElementById("rememberMe");
  const emailInput = document.getElementById("email");

  // Check localStorage for a remembered user and pre-fill the email field
  const rememberedEmail = localStorage.getItem("rememberedEmail");
  if (rememberedEmail) {
    emailInput.value = rememberedEmail;
    rememberMeCheckbox.checked = true;
  }
});

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;
    const errorMessageDiv = document.getElementById("errorMessage");
    errorMessageDiv.style.display = "none"; // Hide error message by default

    try {
      const users = JSON.parse(localStorage.getItem("users")) || {};

      if (users[email] && users[email].password === password) {
        // If "Remember me" is checked, store the email
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        sessionStorage.setItem("loggedInUser", email);
        window.location.href = "home.html";
      } else {
        errorMessageDiv.textContent = "Invalid email or password.";
        errorMessageDiv.style.display = "block";
      }
    } catch (error) {
      console.error("Error during login:", error);
      errorMessageDiv.textContent = "An error occurred. Please try again.";
      errorMessageDiv.style.display = "block";
    }
  });
