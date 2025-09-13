import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nkqnoazbjnqstbmdzzpj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rcW5vYXpiam5xc3RibWR6enBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MjI3MDgsImV4cCI6MjA3MjM5ODcwOH0.8KpAjj00HaN71LkTF537A048YG-SVzJu1IPKv1E7n9Y';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});