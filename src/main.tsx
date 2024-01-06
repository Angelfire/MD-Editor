import React from "react"
import ReactDOM from "react-dom/client"
import { TooltipProvider } from "@/components/plate-ui/tooltip"

import App from "./App"

import "./styles.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TooltipProvider disableHoverableContent delayDuration={500} skipDelayDuration={0}>
      <App />
    </TooltipProvider>
  </React.StrictMode>
)
