import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './share/css/allPages.css';
import AppAllModules from './AppAllModules.jsx';
import { Provider } from "react-redux";
import store from '../src/security/redux/store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppAllModules />
    </Provider>
  </StrictMode>,
)
