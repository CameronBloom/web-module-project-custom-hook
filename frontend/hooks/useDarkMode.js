import { useState } from "react";

export const useDarkMode = (initialValue) => {
  const [dark, setDark] = useState(initialValue);
  return [dark, setDark];
};