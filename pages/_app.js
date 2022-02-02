import '../styles/index.css';
import Header from '../components/header.js';
import '../styles/login.css';
import '../styles/upload.css';
import '../styles/popup.css';

export default function MyApp({ Component, pageProps }) {
    return (<div>
        <Header />
        <Component {...pageProps} ></Component>
    </div>
    )}