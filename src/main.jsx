import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BaseApp from './BaseApp.jsx'

const RootApp = import.meta.env.VITE_APP_TARGET === "base" || window.location.pathname.startsWith("/base") ? BaseApp : App;
const manifest = document.getElementById("app-manifest");
if (manifest && window.location.pathname.startsWith("/base")) {
  manifest.setAttribute("href", "/base-manifest.webmanifest");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
