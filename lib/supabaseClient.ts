
import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// BACKEND CONFIGURATION (SUPABASE)
// Connection established with Project ID: rzoldfxpcpduybywinzk
// ------------------------------------------------------------------

const SUPABASE_URL = 'https://rzoldfxpcpduybywinzk.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6b2xkZnhwY3BkdXlieXdpbnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NDI3ODEsImV4cCI6MjA4MTUxODc4MX0.gQV13oqX4lLmiTvTTBlS1p5Fr00Gt7xB0rjHG66MJo0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper to check if backend is configured
export const isBackendConfigured = () => {
    return !SUPABASE_ANON_KEY.includes('PASTE_YOUR_ANON_KEY_HERE') && 
           !SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY');
};
