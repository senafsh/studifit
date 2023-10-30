import { supa } from "../config/config.js";

const btn = document.querySelector('#btn');
btn.addEventListener('click', givetip);

const user = supa.auth.user();

// Einen Tipp in die Datenbank einfügen
async function givetip() {
    const tip = document.querySelector('#tip');
    console.log(tip.value);
    const { data, error } = await supa.from("tips").insert([
        { description: tip.value, location: standort.value, level: level.value, users_id: user.id}
    ]);
    if (data) {
        console.log('Entry was created successfully', data);
        window.location.href = "bestaetigung.html";
      } else {
        console.log('Error occured', error)
      }

    return data;
  }