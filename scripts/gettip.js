import { supa } from "../config/config.js";

// Alle Tipps abrufen und anzeigen

async function showAll() {
  try {
    const { data, error } = await supa.from("tips").select('description');

    if (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Unbehandelter Fehler:", err);
    return null;
  }
}