import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://your-project-id.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "your-publishable-anon-key";

export const supabase = createClient(supabaseUrl, supabaseKey);
