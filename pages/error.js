import Link from 'next/Link'
export default function Dashboard() {
    return (
        <div>
            <div className="screen">

               

            </div>
            <div >

                <div className="card-grid">
                    <div>
                        <h1>🚫</h1>
                        <h1>Entschuldigung, es liegt ein technischer Fehler vor.  Bitte wiederholen Sie die Aktion</h1>
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
                                Wiederholen
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>)
}