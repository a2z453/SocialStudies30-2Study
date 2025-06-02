// pages/_app.js
import '@/styles/globals.css'; // Use '@/...' if using path aliases
// or
// import '../styles/globals.css'; // If not using aliases

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
