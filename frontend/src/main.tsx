import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CountryProvider } from './contexts/CountryContext';
import AuthProvider from './contexts/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </AuthProvider>
)
