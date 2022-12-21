// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Router
import { BrowserRouter} from 'react-router-dom'

// App
import App from './app/App'


import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
