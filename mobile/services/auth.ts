import supabase from "../lib/supabase";
import { Session, AuthChangeEvent } from "@supabase/supabase-js";

export const auth = {
  async signUp(email: string, password: string) {
    return supabase.auth.signUp({ email, password });
  },
  async signIn(email: string, password: string) {
    return supabase.auth.signInWithPassword({ email, password });
  },
  async signOut() {
    return supabase.auth.signOut();
  },
  async getSession() {
    return supabase.auth.getSession();
  },
  onAuthStateChange(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return supabase.auth.onAuthStateChange(callback);
  },
};
