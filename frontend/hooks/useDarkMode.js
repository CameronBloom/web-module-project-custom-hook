// import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  // const [dark, setDark] = useState(initialValue);
  const [dark, setDark] = useLocalStorage(key, initialValue);
  return [dark, setDark];
};