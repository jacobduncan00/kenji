import { createContext, useContext } from "react";
import { createClient } from "@supabase/supabase-js";

const AppContext = createContext({});

const AppContextProvider = ({ children }: any) => {
  const supabaseUrl = "";
  const supabaseKey = "";
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
