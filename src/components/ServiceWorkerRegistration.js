'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    const env = process.env.NEXT_PUBLIC_NODE_ENV;
    console.log(`Environment: ${env}`);
    
    if (env === 'production') {
      if ('serviceWorker' in navigator) {
        console.log('Registering Service Worker for production...');
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      }
    } else {
      console.log('Service Worker disabled in development mode');
    }
  }, []);

  return null;
}
