import Link from 'next/Link'
export default function Dashboard() {
    return (
        <div>
            <div className="screen">
                <h3 className="">
                    Meta-daten hochladen
                </h3>
                

            </div>
            <div className="grid">

                <div className="card-grid">
                    <div>
                        <h3>Laden Sie eine oder mehrere RDF-Dataeien hoch</h3>
                        <div className="bottom-btn">
                            <Link href='/login'>
                                <a>
                                    <button>
                                        Daten Veröffentlichen
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bottom-btn">
                <Link href='/login'>
                    <a>
                        <button>
                            Zurück
                        </button>
                    </a>
                </Link>
            </div>
            <div className="bottom-btn">
                <Link href='/login'>
                    <a>
                        <button>
                            Weiter
                        </button>
                    </a>
                </Link>
            </div>
        </div>)
}