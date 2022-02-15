import Link from 'next/link';
import Head from 'next/head';

export default function Error() {
    return (

        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>


                <div className="screen">

                    <form className="data-form">

                        <div className="full-w center">
                            <div>
                                <h1>🚫</h1>
                                <p className="s-16">Entschuldigung, es liegt ein technischer Fehler vor.  Bitte<br /> wiederholen Sie die Aktion</p>
                            </div>

                        </div>

                        <div className="row full-w center ">
                            <Link href='/dashboard'>
                                <a>
                                    <button type='button' className="white-btn">
                                        Weiter zum Dashboard
                                    </button>
                                </a>
                            </Link>

                            <Link href='/upload'>
                                <a>
                                    <button type='button' className="black-btn">
                                        Weitere Daten hochladen
                                    </button>
                                </a>
                            </Link>
                        </div>

                    </form>



                </div>

            </main>


        </div>

    )
}