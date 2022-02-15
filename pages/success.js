import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/footer.js';
import Image from 'next/image'

export default function Success() {
    return (

        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

                <div className="login-screen">

                    <div className="row">
                        <h1 className="mt0">Ihre Daten wurden <br />erfolgreich hochgeladen!</h1>
                        <div className='rocket'> <Image 
                            src="/success.svg"
                            alt="success"
                            width={100}
                            height={60}
                        /></div>



                    </div>
                    <br />
                    <div className="row first-mid-sent">
                        <svg width="30" height="20" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 1L0 0.999998" stroke="black" />
                        </svg>

                        <h3 className="mt0 mr0 ml0">Vielen Dank für Ihren Beitrag zur Open Community Bayern.<br />
                            Ihre Daten werden uns helfen die Plattform weiterzuentwickeln.

                        </h3>
                    </div>

                    <div className="btn-blue">
                        <Link href='/upload'>
                            <a>
                                Weitere Daten hochladen
                            </a>
                        </Link>

                    </div>


                </div>

            </main>
            <Footer />

        </div>

    )
}