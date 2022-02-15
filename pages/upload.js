import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Footer from '../components/footer.js';
import Header from '../components/header.js';

export default function Home() {
    const Router = useRouter();
    const open = (type) => {
        if (type == "data") {
            Router.push("/upload-data");
        }
        else if (type == "link") {
            Router.push("/upload-link-data");
        }
        else if (type == "meta") {
            Router.push("/upload-meta-data");
        }
    }
    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <div className="login-screen">
                   
                    <h1>Wie möchten Sie Ihre Daten zur Verfügung stellen?</h1>
                    <br />
                    <br/>

                    <div className="upload-grid">
                        <div className="card-grid">
                            <div className="cards c1" onClick={() => {open("data")}}>
                                <h2 >Lokale Datei<br/> hochladen</h2>
                                <h4 >* Alle Dateiformate erlaubt</h4>
                                </div>
                           

                             <div className="cards c2" onClick={() => { open("link") }}>
                                <h2 >Link zum<br /> Datensatz</h2>
                                <h4 >* Ressource-URL zum Datensatz</h4>
                                </div>

                            
                        </div>

                    </div>

                </div>

            </main>

        <Footer />
        </div>
    )
}