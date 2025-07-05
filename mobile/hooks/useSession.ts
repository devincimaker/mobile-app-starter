import { useState, useEffect } from "react";
import { auth } from "../services/auth";
import { Session } from "@supabase/supabase-js";

export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    auth.getSession().then(({ data }) => {
      setSession(data.session);
      setInitializing(false);
    });

    const {
      data: { subscription },
    } = auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = () => auth.signOut();

  return { session, initializing, signOut };
}
