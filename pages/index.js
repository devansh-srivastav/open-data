import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

    
  return (
    <div className="container">
      <Head>
        <title>Open Data Bayern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>


        <div className="screen">
          <p className="s-22 bold">
                      Daten aus Bayern
          </p>

        </div>

        <div className="grid">
          <p className="s-22 normal"> Open Data Portal Statistik</p>
          <div className="card-grid">
            <div className="card">
              <h1>92</h1>
              <p className="s-16 normal">Datensätze</p>
            </div>

            <div className="card">
              <h1>25</h1>
              <p className="s-16 normal">Organisationen</p>
            </div>

            <div className="card">
              <h1>18</h1>
             <p className="s-16 normal">Kategorien</p>
            </div>
          </div>

        </div>
        <div className="bottom-btn">

          <button>
            <Link href='/login'>
              <a>
                Daten veröffentlichen
              </a>
            </Link>
          </button>


        </div>
      </main>

      <style jsx>{`

        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
