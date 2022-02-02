import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="screen">
                   
                    <div className="login-detail">
                        Auf welche Weise mochten Sie Ihre Daten zur Verfugung stellen?
                    </div>

                    <div className="upload-grid">
                        <div className="card-grid">
                            <Link href="/upload-data">
                                <div className="cards">
                                <h4>Daten hochladen</h4>
                                <p>Alle Dateiformate</p>
                                </div>
                            </Link>

                            <Link href="/upload-link-data">
                            <div className="cards">
                                <h4>Link hochladen</h4>
                                <p>URL</p>
                                </div>
                            </Link>

                            <Link href="/upload-meta-data">
                            <div className="cards">
                                <h4>Meta-Daten hochladen</h4>
                                <p>RDF-Datei</p>
                                </div>
                             </Link>
                        </div>

                    </div>

                    <div className="login-detail">
                        Bitte kontaktieren Sie das Bayrische Staatsministerium fur Digitales, um sich zu registrieren
                    </div>

                </div>

            </main>


        </div>
    )
}