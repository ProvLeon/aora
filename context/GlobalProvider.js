import { getCurrentUser } from "@/lib/appwrite";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from "react";

const GlobalContext = createContext(); // Provide default values

export const useGlobalContext = () => useContext(GlobalContext);



export const GlobalProvider= ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => { // Use async/await for better error handling
      try {
        const res = await getCurrentUser();
        setIsLoggedIn(true); // Ensure boolean value
        setUser(res);
      } catch (error) {
        console.error("Error fetching user:", error); // Log errors
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
