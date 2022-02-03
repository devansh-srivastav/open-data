import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    const login = () => {
        window.open("/login", "_self");
    }

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

    const [isRed, setRed] = useState(false);
    const submit = ()=>(e) => {
        
        if (query.name != "" && query.email != "" && query.org != "") {
            setRed(false);
            localStorage.setItem("email", query.email);
            localStorage.setItem("name", query.name);
            localStorage.setItem("org", query.org);
            router.push("/dashboard");
        }
        else {
            setRed(true);
            e.preventDefault();
        }
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
                        Bitte loggen Sie sich ein, um daten hochzuladen.
                    </div>

                    <form className="login-form">
                        <input placeholder="Name" value={query.name} name="name" className={isRed && query.name==""?"red-border":""} onChange={handleChange()}/>
                        <input placeholder="Email-Adresse" type="email" className={isRed && query.email == "" ? "red-border" : ""} value={query.email} name="email" onChange={handleChange()}/>
                        <input placeholder="Organisation(und Abteilung)" className={isRed && query.org == "" ? "red-border" : ""} value={query.org} name="org" onChange={handleChange()}/>
                        <div className="bottom-btn">

                            <button type="button" onClick={submit()}>
                                Einloggen
                            </button>


                        </div>
                    </form>

                    <div className="login-detail full-center">
                        Bitte <a href="mailto: olga.popova@dpschool.io">Kontaktieren</a> Sie das Bayrische Staatsministerium für Digitales, um sich zu registrieren
                    </div>

                </div>

            </main>


        </div>
    )
}