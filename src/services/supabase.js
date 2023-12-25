import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jzwetzccxtnugbvxppdm.supabase.co";

let supabaseKey;
if (import.meta.env.NETLIFY === "true") {
  supabaseKey = process.env.VITE_SUPABASE_KEY;
} else {
  supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
}

const supabase = createClient(supabaseUrl, supabaseKey);

// https://supabase.com/docs/reference/javascript/auth-signup
// serves as a seperator from the "main" supabase instance, so signing up the user won't interfere with the current user session
// export const supabase2 = createClient(supabaseUrl, supabaseKey, {
//   auth: {
//     storageKey: "s1",
//   },
// });

export default supabase;
