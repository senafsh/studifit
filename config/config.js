console.log("Initialisierung Supabase");

// Supabase Initialisierung
const supabaseUrl = 'https://rhifdkpeihakocmdegsa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoaWZka3BlaWhha29jbWRlZ3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMzY3MzMsImV4cCI6MjAxMTkxMjczM30.pHmyr4mlmHw8fODlw9YDVkk_0vjXH3VIEwQc52Wb8OY'
const supa = supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        redirectTo: window.location.origin,  // This will redirect back to the page where the request originated from
    },
});

export { supa }