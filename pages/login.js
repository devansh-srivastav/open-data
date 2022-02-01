import Head from 'next/head';
import Header from './header.js';

export default function Home() {

    const login = () => {
        console.log("a")
        window.open("/login", "_self");
    }
    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/> 
            <main>
                <div className="screen">
                    <div className="screen-title">
                        Login
                    </div>
                    <div className="login-detail">
                        Bitte Loggen eie eich ein, um daten hochzuladen
                    </div>

                    <form className="login-form">
                        <input placeholder="Name" />
                        <input placeholder="Email-Adresse" />
                        <input placeholder="Organisation(und Abteilung)" />
                    </form>
                </div>

            </main>

           
        </div>
    )
}
