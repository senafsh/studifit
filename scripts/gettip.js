import { supa } from "../config/config.js";

// Alle Tipps abrufen und anzeigen

async function showAll() {
  const ul = document.querySelector('#list');
  const { data, error } = await supa.from("random_tips").select().limit(3);
  data.forEach(tip => {
    const li = document.createElement('li');
    li.innerHTML = tip.description;
    ul.appendChild(li);
  })
}

showAll();

async function fetchRandomTips() {
    const { data, error } = await supa.from("tips").select();

}

const limit = 3; // Ändern Sie die Anzahl auf die gewünschte Anzahl von zufälligen Tipps
const randomTips = await fetchRandomTips();

console.log('Zufällige Tipps:', fetchRandomTips());