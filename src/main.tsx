import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

//Delete from here
// Google Analytics (gtag) injection — only when VITE_GA_ID is set (e.g., in production)
const GA_ID = (import.meta.env as { VITE_GA_ID?: string }).VITE_GA_ID;
if (GA_ID) {
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(tag);

  const inline = document.createElement('script');
  inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { 'anonymize_ip': true });`;
  document.head.appendChild(inline);
}
//to here
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
