import Head from 'next/head'
import Header from './header.js';

export default function Home() {

    const login = () => {
        console.log("a")
        window.open("/login","_self");
    }
  return (
    <div className="container">
      <Head>
        <title>Open Data Bayern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
       

         <div className="screen">
          <h3 className="">
                      Daten aus Bayern
          </h3>

         </div>

              <div className="grid">
                  <h3> Open Data Portal Statistik</h3>
                  <div className="card-grid">
                  <div href="https://nextjs.org/docs" className="card">
                      <h1>92</h1>
                      <p>Datasets</p>
                      </div>

                      <div href="https://nextjs.org/docs" className="card">
                      <h1>25</h1>
                      <p>Organizationen</p>
                      </div>

                      <div href="https://nextjs.org/docs" className="card">
                      <h1>18</h1>
                      <p>Gruppen</p>
                      </div>
                      </div>

              </div>
              <div className="bottom-btn">
                  <button>
                      Daten Veroffentlichen
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
