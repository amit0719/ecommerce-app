import { useState, useEffect } from "react";

const useLocalStorage = (userId) => {
  const key = userId
    ? `app-local-storage-${userId}`
    : "app-local-storage-guest";

  const initialValue = { userId: null, cartItems: [], checkout: null };

  const [storedValue, setStoredValue] = useState(() => {
    // Retrieve stored value from local storage
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving from local storage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    // Update local storage whenever storedValue changes
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error storing to local storage:", error);
    }
  }, [key, storedValue]);

  console.log("hey LG storedValue", storedValue);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
