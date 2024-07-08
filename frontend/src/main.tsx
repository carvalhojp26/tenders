import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CountryProvider } from './contexts/CountryContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CountryProvider>
      <App />
    </CountryProvider>
)
