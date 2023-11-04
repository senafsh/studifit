import { supa } from "../config/config.js";

// Alle Tipps nach den ausgwählten Kriterien abrufen und anzeigen

const gettip = document.querySelector('#gettip');
gettip.addEventListener('click', showSelected);

async function showSelected() {
  const ul = document.querySelector('#list');
  
  // Die ausgewählten Werte aus den Dropdown-Menüs abrufen
  const selectedStandort = document.querySelector('#standort').value;
  const selectedLevel = document.querySelector('#level').value;
  
  // Supabase-Abfrage mit den ausgewählten Kriterien durchführen
  const { data, error } = await supa
    .from("random_tips")
    .select()
    .eq('location', selectedStandort) // Standort filtern
    .eq('level', selectedLevel)       // Level filtern
    .limit(3);
  
  ul.innerHTML = ''; // Zurücksetzen der Liste, um vorherige Ergebnisse zu entfernen
  
  if (data.length > 0) {
    ul.classList.remove('hidden'); // Liste sichtbar machen, wenn mindestens ein Tipp verfügbar ist
  }
  
  data.forEach(tip => {
    const li = document.createElement('li');
    li.innerHTML = tip.description;
    ul.appendChild(li);
  });
}

// Alle Tipps abrufen und anzeigen

const gettiprandom = document.querySelector('#wuerfel');
gettiprandom.addEventListener('click', showAll);

async function showAll() {
  const ul = document.querySelector('#list');
  
  // Supabase-Abfrage mit den ausgewählten Kriterien durchführen
  const { data, error } = await supa
    .from("random_tips")
    .select()
    .limit(3);
  
  ul.innerHTML = ''; // Zurücksetzen der Liste, um vorherige Ergebnisse zu entfernen
  
  if (data.length > 0) {
    ul.classList.remove('hidden'); // Liste sichtbar machen, wenn mindestens ein Tipp verfügbar ist
  }
  
  data.forEach(tip => {
    const li = document.createElement('li');
    li.innerHTML = tip.description;
    ul.appendChild(li);
  });
}

// Bei Klick auf Button zur Tipp geben Seite weiterleiten
// document.getElementById('button_give').addEventListener('click', function() {
//  window.location.href = "givetip.html";
// });