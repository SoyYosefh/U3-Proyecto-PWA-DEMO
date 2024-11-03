import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './share/css/allPages.css';
import AppAllModules from './AppAllModules.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppAllModules />
  </StrictMode>,
)
