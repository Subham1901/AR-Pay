import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useAuthState(auth) {
  const [currentUserData, setCurrentUserData] = useState(null);
  const handleAuthSateChange = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserData(auth?.currentUser?.providerData);
      }
    });
  };
  useEffect(() => {
    handleAuthSateChange();
  }, []);

  return currentUserData;
}
