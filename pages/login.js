import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image"
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import Popup from '../components/popup';

export default function Home() {
    const router = useRouter();
    const login = () => {
        window.open("/login", "_self");
    }

    const [query, setQuery] = useState({
        name: "",
        email: "",
        org: ""
    });


    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
        setChange(true);

    };
    const [popup, openPopup] = useState(false);
    const [change, setChange] = useState(false);
    const [loading, setupload] = useState(false);
    const [isRed, setRed] = useState(false);
    const submit = () => (e) => {
        e.preventDefault();
        if (query.name != "" && query.email != "" && query.org != "") {
            setRed(false);
            setupload(true);

            localStorage.setItem("email", query.email);
            localStorage.setItem("name", query.name);
            localStorage.setItem("org", query.org);


            const scriptURL = 'https://script.google.com/macros/s/AKfycbwbLxUpNtBPKSNKg1Rh7OOcyiZKMFbFP49Y--RWhOXBLT3UyzK4ata_mka19mtuaS2K/exec'
            const form = document.forms['open data']

            fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors', headers: { cookie: 'ip2loc=isset' } })
                .then(response => { setupload(false); router.push("/upload") })
                .catch(error => { setupload(false); window.alert("please retry") });


        }
        else {
            setRed(true);
            e.preventDefault();
        }
    }

    const cancel = () => (e) => {

    }

    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                {popup && <Popup popup={popup} openpopup={openPopup} />}
                <div className="login-loader" style={loading ? { opacity: 1 } : { opacity: 0 }}> <Image src="/loader.gif" width="35" height="35" alt="" /></div>

                <div className="login-screen">
                    <h1>Kontaktdaten</h1>
                    <br />
                    <br />
                    <div className="grids">
                        <div className="first">
                            <div>
                                <h4 className="h4Top">
                                    Bitte hinterlassen Sie Ihre Kontaktdaten und benennen Sie Ihre Organisation, damit wir Ihren Datensatz zuordnen und bei Fragen kontaktieren können.
                                </h4>
                                <br />
                                <h4>
                                    Bei Fragen können Sie uns gerne <a href='mailto:olga.popova@dpschool.io'><u>kontaktieren</u>.</a>
                                </h4>
                            </div>

                        </div>
                        <div className="sec">
                            <form className="login-form" name="open data" method="post" autoComplete="off">
                                <input placeholder="Name*" value={query.name} name="name" className={isRed && query.name == "" ? "red-border" : ""} onChange={handleChange()} />
                                <input placeholder="Email*" type="email" className={isRed && query.email == "" ? "red-border" : ""} value={query.email} name="email" onChange={handleChange()} />
                                <input placeholder="Organisation(und Abteilung)*" className={isRed && query.org == "" ? "red-border" : ""} value={query.org} name="org" onChange={handleChange()} />
                                <div className="bottom-btn mT80">

                                    <button type="button" value="submit" name="submit" className="zuruk" onClick={() => (change == true && (query.name != "" || query.email != "" || query.org != "")) ? openPopup(true) : router.push("/")}>
                                        Zurück

                                    </button>
                                    <button type="submit" value="submit" name="submit" className="weiter" onClick={submit()}>
                                        Weiter
                                    </button>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
       
    )
}