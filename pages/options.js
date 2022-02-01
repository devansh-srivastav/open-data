import Head from 'next/head';
import Header from './header.js';

export default function Home() {

    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="screen">
                    <div className="screen-title">
                        Login
                    </div>
                    <div className="login-detail">
                        Bitte Loggen eie eich ein, um daten hochzuladen
                    </div>

                    <form className="login-form">
                        <input placeholder="Name" value={query.name} name="name" onChange={handleChange()}/>
                        <input placeholder="Email-Adresse" type="email" value={query.email} name="email" onChange={handleChange()}/>
                        <input placeholder="Organisation(und Abteilung)" value={query.org} name="org" onChange={handleChange()}/>
                        <div className="bottom-btn">
                            <button  type="button" onClick={() => submit()}>
                                Einloggen
                            </button>
                        </div>

                    </form>

                    <div className="login-detail">
                        Bitte kontaktieren Sie das Bayrische Staatsministerium fur Digitales, um sich zu registrieren
                    </div>

                </div>

            </main>


        </div>
    )
}