import React from "react";
import { createRoot } from "react-dom/client";
import { useTest } from "./hook/useTest";
import "./index.css";

const App = () => {
  const { isTrue } = useTest();

  const yesOrNo = isTrue ? "YES" : "NO";

  return <div>{yesOrNo}</div>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
