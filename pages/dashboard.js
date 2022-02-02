import Link from 'next/Link'
export default function Dashboard() {
    return (
        <div className="container">
            <div className="screen">
                <div className="row center full-w">
                <h1 className="">
                        Millkommen auf Ihrem Dashboard
                </h1>
                   
                </div>
                <hr/>
                
                <div className="row center">
                    <h4>
                        Aktuell haben Sie noch keine Daten veroffentlicht. <br/><br/>
                        Sobald Sie Daten veroffentlicht haben werden diese nach einer Uberprufungszeit hier und auf der Startseite sichtbar sein.
                    </h4>
                </div>
                <div className="row center full-w">

                <Link href='/upload'>
                    <a>
                        <button className="black-btn">
                            Daten Veröffentlichen
                            </button>
                    </a>
                    </Link>
                </div>
            </div>
</div>)
    }