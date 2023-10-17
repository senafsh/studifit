console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'https://odibmherjofruvwqjdfz.supabase.co/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kaWJtaGVyam9mcnV2d3FqZGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NDA4NDcsImV4cCI6MjAxMzExNjg0N30.KfWxVl9FZIf0kQcBl7k-1Ae2EVWscC6AezZU72hsswc'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

export { supa }