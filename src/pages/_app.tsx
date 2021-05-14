import { AppProps } from 'next/app';
import '@/styles/global.css';
import Layout from '@/components/templates/Layout';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
