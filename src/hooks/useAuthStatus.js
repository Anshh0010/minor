import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { loggedIn, isLoading };
}

export default useAuthStatus;
