import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/ui/components/App.tsx'
import '@/ui/styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
