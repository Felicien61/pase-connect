// 1. Déclaration des clés Supabase
const SUPABASE_URL = "https://djtisrugfqywffnvtysc.supabase.co/rest/v1/"; 
const SUPABASE_ANON_KEY = "sb_publishable_iAE..."; // Votre clé entre guillemets

// 2. Initialisation du client Supabase
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);





// Configuration de la connexion Supabase pour PASE CONNECT
const SUPABASE_URL = "https://djtisrugfqywffnvtysc.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY =  "sb_publishable_iAE..."; //

// Initialisation du client Supabase global
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


