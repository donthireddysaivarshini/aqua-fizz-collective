// File: lib/scroll.ts
import { MouseEvent } from "react";

export const smoothScrollTo = (e: MouseEvent<HTMLElement>, id: string) => {
  e.preventDefault(); // STOP the URL from changing to /#products
  
  const targetId = id.startsWith("#") ? id : `#${id}`;
  const element = document.querySelector(targetId);
  
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};