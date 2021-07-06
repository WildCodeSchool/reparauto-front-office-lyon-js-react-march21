import { ToastProvider } from 'react-toast-notifications';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';


import('../styles/globals.css');
// import { ToastProvider, useToasts } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
  return (
    
      <ToastProvider
        placement="bottom-right"
      >
        <Layout>
      <Component {...pageProps} />
      </Layout>
      </ToastProvider>
    
  );
}

export default MyApp;
