import { ToastProvider } from 'react-toast-notifications';
import 'tailwindcss/tailwind.css';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import 'react-datepicker/dist/react-datepicker.css';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <ToastProvider
        placement="bottom-right"
        autoDismissTimeout="4000"
        autoDismiss="true"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </AnimatePresence>
  );
}
