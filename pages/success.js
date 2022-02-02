import Link from 'next/Link'
export default function Dashboard() {
    return (
        <div>
            <div className="screen">
                
               

            </div>
            <div >

                <div className="card-grid">
                    <div>
                        <h1>🚀</h1>
                        <h1>Ihre Daten wurden erfolgreich hochgeladen und werden in Kürze auf Ihrem Dashboard und öffentlich auf der Plattform verfügbar sein.</h1>
                    </div>

                </div>

                <div className="bottom-btn">
                    <Link href='/login'>
                        <a>
                            <button>
                                Weiter zum Dashboard
                            </button>
                        </a>
                    </Link>
                </div>

                <div className="bottom-btn">
                    <Link href='/login'>
                        <a>
                            <button>
                                Weitere Daten hochladen
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>)
}