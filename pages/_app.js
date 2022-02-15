import '../styles/index.css';
import Footer from '../components/footer.js';
import '../styles/login.css';
import '../styles/upload.css';
import '../styles/popup.css';

export default function MyApp({ Component, pageProps }) {
    return (<div>
        <Component {...pageProps} ></Component>
        
    </div>
    )}