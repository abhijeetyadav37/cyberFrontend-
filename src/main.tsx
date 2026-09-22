import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import { App } from "@/app/App";

const storedTheme = localStorage.getItem("cybersaarthi-theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (storedTheme === "dark" || (storedTheme === "system" && systemDark)) {
  document.documentElement.classList.add("dark");
}
document.documentElement.lang = localStorage.getItem("cybersaarthi-language") === "hi" ? "hi" : "en";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);