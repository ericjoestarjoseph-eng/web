import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://mqynwwotgorwsvkslkad.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "sb_publishable_6haXRxZAMYhgcmo8mgsWQw_yaaI7VwE";

export const supabase = createClient(supabaseUrl, supabaseKey);
