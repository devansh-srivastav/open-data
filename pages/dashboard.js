import Link from 'next/link'
export default function Dashboard() {
    return (
        <div className="container">
            <div className="screen">
                <div className="">
                    <h1 className="">
                        Willkommen auf Ihrem Dashboard
                    </h1>

                </div>
                <hr />
                <br /><br /><br />

                <div className="row center">
                    <h4>
                        Aktuell haben Sie noch keine Daten veröffentlicht. <br /><br />
                        Sobald Sie Daten veröffentlicht haben werden diese nach einer Überprüfungszeit hier und auf der Startseite sichtbar sein.
                    </h4>
                </div>
                <div className="row center full-w">

                    <Link href='/upload'>
                        <a>
                            <button type='button' className="black-btn">
                                Daten Veröffentlichen
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>)
}