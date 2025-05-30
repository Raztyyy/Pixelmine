import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ucuoahvldklvpifdqlvx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjdW9haHZsZGtsdnBpZmRxbHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1Nzk5MDIsImV4cCI6MjA2NDE1NTkwMn0.Z-gzs-FFd5U3D2Ni4X7jB-2nZzGzNISYMrPb95nyTcU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
