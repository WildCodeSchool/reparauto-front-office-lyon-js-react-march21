import { ToastProvider } from 'react-toast-notifications';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';


import('../styles/globals.css');
// import { ToastProvider, useToasts } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastProvider
        placement="bottom-right"
      >
      <Component {...pageProps} />
      </ToastProvider>
    </Layout>
  );
}

export default MyApp;
