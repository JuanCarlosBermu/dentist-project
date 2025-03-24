import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App.jsx'
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
