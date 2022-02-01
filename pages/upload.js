import Head from 'next/head';
import { useState } from 'react'

export default function Home() {

    

    const [query, setQuery] = useState({
        name: "",
        email: "",
        org:""
    });

    
    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const submit = () => {
        console.log(query);
    }
    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
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