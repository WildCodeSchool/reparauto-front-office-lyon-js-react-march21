import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout'
import ('../styles/globals.css');
import { AnimatePresence } from "framer-motion";
import 'react-datepicker/dist/react-datepicker.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
