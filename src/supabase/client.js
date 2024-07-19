import { createClient } from "@supabase/supabase-js";


const projectURL = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const projectKey = import.meta.env.VITE_SUPABASE_PROYECT_APIKEY;

export const supabase  = createClient(projectURL,projectKey);