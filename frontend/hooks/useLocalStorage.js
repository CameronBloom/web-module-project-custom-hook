import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // use state checks whether or not the key exists in localstorage before using the intial value
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  // set the local storage value for a specific key
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  // return the value and the ability to change that value
  return [storedValue, setValue];
};