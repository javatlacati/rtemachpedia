import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {PrimeReactProvider} from "primereact/api";
import "primereact/resources/themes/arya-blue/theme.css";

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider>
    <App/>
  </PrimeReactProvider>
)
