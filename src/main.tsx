import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './gep-globe'
import './index.css'

function markLogoFontsReady() {
  const root = document.documentElement
  const ready = () => root.classList.add('gep-fonts-ready')

  if (typeof document === 'undefined' || !document.fonts?.load) {
    ready()
    return
  }

  const loads = [
    document.fonts.load('400 1em "Century Gothic GEP"'),
    document.fonts.load('400 1em "Tele Marines GEP"'),
  ]

  Promise.all(loads)
    .then(ready)
    .catch(ready)

  // Never leave the logo invisible if fonts hang
  window.setTimeout(ready, 2500)
}

markLogoFontsReady()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
