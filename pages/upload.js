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

                    <div className="login-detail row center full-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1.5H3C2.17125 1.5 1.5075 2.17125 1.5075 3L1.5 16.5L4.5 13.5H15C15.8288 13.5 16.5 12.8288 16.5 12V3C16.5 2.17125 15.8288 1.5 15 1.5ZM9.75 10.5H8.25V9H9.75V10.5ZM9.75 7.5H8.25V4.5H9.75V7.5Z" fill="black" />
                        </svg>
                        <a href="mailto: olga.popova@dpschool.io">Kontaktieren</a> Sie uns gerne, wenn Sie Hilfe beim Hochladen benotigen.

                    </div>

                </div>

            </main>


        </div>
    )
}