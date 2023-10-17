import { supa } from "../config/config.js";

const btn = document.querySelector('#btn');
btn.addEventListener('click', givetip);

// Einen Tipp in die Datenbank einfügen
async function givetip() {
    const tip = document.querySelector('#tip');
    console.log(tip.value);
    const { data, error } = await supa.from("tips").insert([
        { description: tip.value, location: standort.value, level: level.value}
    ]);
    if (data) {
        console.log('Entry was created successfully', data);
      } else {
        console.log('Error occured', error)
      }

    return data;
  }