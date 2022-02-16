import Link from 'next/link'
export default function Dashboard() {
    return (
        <div className="container">
            <main>
                <div className="screen">
                    <div className="">
                        <p className="s-22 bold">
                            Willkommen auf Ihrem Dashboard
                        </p>

                    </div>
                    <hr />
                    <br /><br /><br />

                    <div className="text-center center full-w">
                        <div className=" full-w">
                            <p className="s-16">
                                Aktuell haben Sie noch keine Daten veröffentlicht. <br /><br />
                                Sobald Sie Daten veröffentlicht haben werden diese nach einer Überprüfungszeit <br />hier und auf der Startseite sichtbar sein.
                            </p>
                        </div>
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