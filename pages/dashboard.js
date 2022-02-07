import Link from 'next/link'
export default function Dashboard() {
    return (
        <div className="container">
            <main>
            <div className="screen">
                <div className="">
                    <strong className="">
                        Willkommen auf Ihrem Dashboard
                    </strong>

                </div>
                <hr />
                <br /><br /><br />

                    <div className="row center full-w">
                        <div className="full-w">
                    <h4>
                        Aktuell haben Sie noch keine Daten veröffentlicht. <br /><br />
                        Sobald Sie Daten veröffentlicht haben werden diese nach einer Überprüfungszeit hier und auf der Startseite sichtbar sein.
                    </h4>
                            </div>
                </div>
                <div className="row center full-w">

                    <Link href='/upload'>
                        <a>
                            <button type='button' className="black-btn">
                                    Daten veröffentlichen
                            </button>
                        </a>
                    </Link>
                </div>
                </div>
                </main>
        </div>)
}