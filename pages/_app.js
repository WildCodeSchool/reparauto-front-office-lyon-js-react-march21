import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout'
import ('../styles/globals.css');
// import { ToastProvider, useToasts } from 'react-toast-notifications';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      
      <Component {...pageProps} />
      
    </Layout>
  );
}

export default MyApp;
