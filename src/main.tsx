import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import App2 from './further-reps/app2.tsx'
import App3 from './further-reps/app3.tsx'
import App4 from './further-reps/app4.tsx'
import App5 from './further-reps/app5.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
    <App4 />
    <App5 />
  </React.StrictMode>,
)
