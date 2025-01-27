import { supabase } from "@/lib/supabase";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return navigateTo("/login");
  }
});
