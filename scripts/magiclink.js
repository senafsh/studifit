import { supa } from "../config/config.js";

console.log(window.location.origin);

const userStatusElement = document.getElementById('userStatus');

// Funktion, um Magic Link zu senden
async function sendMagicLink() {
    const email = document.getElementById('emailInput').value;
    const { error } = await supa.auth.signIn({ email });
    
    if (error) {
        console.error("Error sending magic link: ", error.message);
    } else {
        console.log("Magic link sent to ", email);
        userStatusElement.textContent = "Anmeldelink verschickt";
    }
}

// Funktion, um User Status zu aktualisieren
function updateUserStatus(user) {
  
  if (user) {
        userStatusElement.textContent = `Erfolgreich eingeloggt als: ${user.email}`;
        window.location.href = "choose.html";
  } else {
      // userStatusElement.textContent = "Login hat nicht geklappt.";
      // console.log("Login hat nicht geklappt.")
  }
}

// Prüfe und zeige den initialen User Status an
const initialUser = supa.auth.user();
updateUserStatus(initialUser);

// Eventlistener für Magic Link Button
document.getElementById('sendMagicLinkButton').addEventListener('click', sendMagicLink);

// Listener, für Änderungen des Auth Status
// UserStatus wird aktualisiert, wenn sich der Auth Status ändert
supa.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
      console.log("User signed in: ", session.user);
      updateUserStatus(session.user);
  } else if (event === "SIGNED_OUT") {
      console.log("User signed out");
      updateUserStatus(null);
  }
});

