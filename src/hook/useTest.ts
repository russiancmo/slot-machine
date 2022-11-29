import React, { useEffect, useState } from "react";

export const useTest = () => {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTrue(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  
  return { isTrue };
};
