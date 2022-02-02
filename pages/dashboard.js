import Link from 'next/Link'
export default function Dashboard() {
    return(
        <div>
            <div className="screen">
                <h3 className="">
                    Willkommen auf Ihrem Dashboard
                </h3>
                <div className="bottom-btn">
                    <Link href='/upload'>
                        <a>
                            <button>
                                Daten Veröffentlichen
                            </button>
                        </a>
                    </Link>
                </div>

            </div>

                
                
                        <h1>Nach der Bearbeitung erscheinen Ihre Daten auf dieser Seite und sind auch für andere Nutzer auf der Startseite.</h1>
          

        </div>)
    }