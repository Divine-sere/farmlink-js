import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iwjgzwrlltoaqqqftfuo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3amd6d3JsbHRvYXFxcWZ0ZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNDgxOTEsImV4cCI6MjA2MzgyNDE5MX0.QJ_zbRs9EgyU_n7iNegWLBSTZ-zDcT9KKV6R1W8ic2M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);