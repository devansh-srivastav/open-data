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
                        <h1 className="mt0">Bei der Bearbeitung Ihrer Anfrage ist <br />leider ein technischer Fehler aufgetreten. </h1>
                        <div className='cross'><Image
                            src="/error.svg"
                            alt="error"
                            width={100}
                            height={60}
                        />
                        </div>


                    </div>
                    <br />
                    <div className="row first-mid-sent">
                        <svg width="30" height="20" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 1L0 0.999998" stroke="black" />
                        </svg>

                        <h3 className="mt0 mr0 ml0">Bitte kehren Sie zurück zur Startseite und wiederholen Sie Ihre Aktion. <br />Schreiben Sie uns gerne eine E-Mail mit Ihren Fragen oder Schwierigkeiten. 
                        </h3>
                    </div>

                    <div className="row success">
                    <div className="btn-blue m-zuruk">
                        <Link href='/upload'>
                            <a>
                                    Zurück zur Startseite
                            </a>
                        </Link>

                        </div>
                        <div className="zuruk">
                            <a href='mailto:olga.popova@dpschool.io'> E-Mail schreiben
                             
                            </a>

                        </div>
                     </div>


                </div>

            </main>
            <Footer />

        </div>

    )
}









// import Link from 'next/link';
// import Head from 'next/head';

// export default function Error() {
//     return (

//         <div className="container">
//             <Head>
//                 <title>Open Data Bayern</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <main>


//                 <div className="screen">

//                     <form className="data-form">

//                         <div className="full-w center">
//                             <div>
//                                 <h1>🚫</h1>
//                                 <p className="s-16">Entschuldigung, es liegt ein technischer Fehler vor.  Bitte<br /> wiederholen Sie die Aktion</p>
//                             </div>

//                         </div>

//                         <div className="row full-w center ">
//                             <Link href='/dashboard'>
//                                 <a>
//                                     <button type='button' className="white-btn">
//                                         Weiter zum Dashboard
//                                     </button>
//                                 </a>
//                             </Link>

//                             <Link href='/upload'>
//                                 <a>
//                                     <button type='button' className="black-btn">
//                                         Weitere Daten hochladen
//                                     </button>
//                                 </a>
//                             </Link>
//                         </div>

//                     </form>



//                 </div>

//             </main>


//         </div>

//     )
// }