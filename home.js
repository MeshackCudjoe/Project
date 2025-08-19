const welcomeMessageElement = document.getElementById("welcomeMessage");
const logoutButton = document.getElementById("logoutButton");

const loggedInUserEmail = sessionStorage.getItem("loggedInUser");

if (!loggedInUserEmail) {
  window.location.href = "login.html";
} else {
  welcomeMessageElement.textContent = `Welcome, ${loggedInUserEmail}!`;
}

logoutButton.addEventListener("click", function () {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});
