import { createContext, useContext } from "react";
import { createClient } from "@supabase/supabase-js";

const AppContext = createContext({});

const AppContextProvider = ({ children }: any) => {
  const supabaseUrl = "https://fbvyilbpylygpxpgivip.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZidnlpbGJweWx5Z3B4cGdpdmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExMzc3ODUsImV4cCI6MTk4NjcxMzc4NX0.YElNH__KZT0-9YxW2BkRTZbvDgJxUNmUDoJcVvWSXD0";
  const supabase = createClient(supabaseUrl!, supabaseKey!);

  return (
    <AppContext.Provider
      value={{
        supabase,
        auth: supabase.auth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext as default, AppContextProvider, useAppContext };
