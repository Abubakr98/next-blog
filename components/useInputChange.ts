import { useState } from "react";

export const useInputChange = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (e: any) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  return [input, handleInputChange];
};
