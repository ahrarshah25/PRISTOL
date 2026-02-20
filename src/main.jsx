import { createRoot } from 'react-dom/client'
import './index.css'
import Bot from "./Components/Bot/Bot.jsx"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Bot>
    <App />
  </Bot>
  </BrowserRouter>
)
