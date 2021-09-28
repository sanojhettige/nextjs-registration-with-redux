import type { AppProps } from 'next/app'
import store from '../store';
import "../assets/css/tailwind.css";
import 'tailwindcss/tailwind.css'

function AuthApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default store.withRedux(AuthApp);
