import Link from 'next/link';
import Head from 'next/head';

export default function Success() {
    return (

        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="screen">

                    <form className="data-form">

                        <div className="row center">
                            <div>
                                <h1>🚀</h1>
                                <h1>Ihre Daten wurden erfolgreich hochgeladen und werden in Kürze auf Ihrem Dashboard und öffentlich auf der Plattform verfügbar sein.</h1>
                            </div>

                        </div>

                        <div className="row center ">
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