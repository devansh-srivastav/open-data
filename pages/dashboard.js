import Link from 'next/Link'
export default function Dashboard() {
    return(
        <div>
            <div className="screen">
                <h3 className="">
                    Willkommen auf Ihrem Dashboard
                </h3>
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
            <div className="grid">
                
                <div className="card-grid">
                    <div className="card">
                        <h1>Ihre hochgeladenen Datensätze werden hier zu sehen sein.</h1>
                </div>

            </div>
        </div>
        </div>)
    }