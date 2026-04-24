import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//t helps render React components into the HTML page. In React 18, we mainly use createRoot() and render() to display the app inside the root element.