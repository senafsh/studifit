import { supa } from "../config/config.js";

const btn = document.querySelector('#btn');
btn.addEventListener('click', givetip);

// Einen Tipp in die Datenbank einfügen
async function givetip() {
    const tip = document.querySelector('#tip');
    const { data, error } = await supa.from("tips").insert([
        { description: tip.value, users_id: 'Hallo' }
    ]);
    if (data) {
        console.log('Entry was created successfully', data);
      } else {
        console.log('Error occured')
      }

    return data;
  }
  
console.log('givetip', givetip());

console.log("Hallo");