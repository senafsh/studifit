import { supa } from "../config/config.js"

const userStatusElement = document.getElementById('userStatus');

async function logout() {
    const { error } = await supa.auth.signOut();
    if (error) {
        console.error("Error during logout:", error);
    } else {
        console.log("User logged out successfully.");
        window.location.href="index.html"
        userStatusElement.textContent = "Erfolgreich abgemeldet"
    }
  }
  
  document.getElementById('logoutButton').addEventListener('click', logout);