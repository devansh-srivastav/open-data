import Head from 'next/head';
import { useState } from 'react';
import Popup from '../components/popup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Loader from '../components/loading'

export default function Uploadlinkdata() {


    const [query, setQuery] = useState({
        title: "",
        desc: "",
        keys: "",
        url: "",
        category: "Bevolkerung und Gesellschaft",
        license: "Creative Commons",
        comment: ""
    });

    const [loading, setupload] = useState(false);

    const categories = ["Bevölkerung und Gesellschaft", "Bildung, Kultur und Sport", "Energie", "Gesundheit", "Justiz, Rechtssystem und öffentliche Sicherheit",
        "Landwirtschaft", "Regierung und öffentlicher Sektor", "Regionen und Städte", "Umwelt", "Verkehr", "Wirtschaft und Finanzen", "Wissenschaft und Technologie", "Andere"
    ];
    const licences = ["Datenlizenz Deutschland Namensnennung 2.0",
        "Datenlizenz Deutschland - Zero - Version 2.0",
        "Creative Commons Namensnennung - 4.0 International(CC BY 4.0)",
        "Creative Commons Namensnennung(CC - BY)",
        "Public Domain Mark 1.0(PDM)",
        "Creative Commons Namensnennung 3.0 Deutschland(CC BY 3.0 DE)",
        "Nutzungsbestimmungen für die Bereitstellung von Geodaten des Bundes",
        "Creative Commons CC Zero License(cc - zero)",
        "Amtliches Werk, lizenzfrei nach §5 Abs. 1 UrhG", "Andere"];
        
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [org, setOrg] = useState("");

    const [isRed, setRed] = useState(false);
    const [popupcontent,setContent] = useState("Sind Sie sicher, dass Sie zuruckgehen wollen? Die eingegebenen Daten werden nicht gespeichert.");
    const [popup, openPopup] = useState(false);
    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
        if (email == "") {
            setEmail(localStorage.getItem("email"));
            setName(localStorage.getItem("name"));
            setOrg(localStorage.getItem("org"));

        }
    };

  
    const submit = (e) => {
        e.preventDefault();
        if (query.file == "" || query.category == "" || query.desc == "" || query.keys == "" || query.license == "" || query.title == "") {
            setRed(true);
        }
        else {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbw4gMBJnUjgqdi2Ynyu1XBQ57D0i_dTVwtTH16cADUFS7cTP6AA6rv1WwhLIyjcL3fX/exec'
            const form = document.forms['url upload']
            setupload(true);

            fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: 'no-cors', headers: { cookie: 'ip2loc=isset' } })
                .then(response => router.push("/success"))
                .catch(error => router.push("/error"));
        }
    }

    const router = useRouter();
    const finalSubmit = () => {
        setupload(true);

        setTimeout(() => {
            router.push("/success");
        }, 5000)

    }

    const cancel = () =>{
        openPopup(true);
    }
    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {popup && <Popup popup={popup} openpopup={openPopup} />}
                {!loading &&
                    <div className="screen">
                        <div className="screen-title">
                        <p className="s-22 bold">Link zur Verfügung stellen</p>
                    </div>
                    <form className="data-form" name="url upload" method="post" autoComplete="off">
                        <input type="email" value={email} name="email" hidden onChange={() => { }} />
                        <input type="text" value={name} name="name" hidden onChange={() => { }} />
                        <input type="text" value={org} name="org" hidden onChange={() => { }} />

                            <div className="row">
                                <span className="field">Resource-URL*</span>
                            <input placeholder="Link zur Quell-Datei" value={query.url} className={isRed && query.url == "" ? "red-border" : ""} type="text" name="url" onChange={handleChange()} />
                            </div>
                        <div className="row">
                            <span className="field">Titel*</span>
                            <input placeholder="Name des Datensatzes" type="text" className={isRed && query.title == "" ? "red-border" : ""} value={query.title} name="title" onChange={handleChange()} />
                        </div>
                        <div className="row">
                            <span className="field">Beschreibung*</span>
                            <textarea placeholder="Kurze Beschreibung der hochgeladenen Daten" className={isRed && query.desc == "" ? "red-border" : ""} rows="5" type="text" value={query.desc} name="desc" onChange={handleChange()} />
                        </div>
                        <div className="row">
                            <span className="field">Keywords*</span>
                            <input placeholder="Schlüsselwörter, um Ihren Datensatz in der Suche auffindbar zu machen" type="text" className={isRed && query.keys == "" ? "red-border" : ""} value={query.keys} name="keys" onChange={handleChange()} />
                        </div>
                        <div className="row">
                            <span className="field">Kategorie*</span>
                            <select name="category" default-value={query.category} className={isRed && query.category == "" ? "red-border" : ""} value={query.category} onChange={handleChange()}  >
                                {
                                    categories.map(function (value, index) {
                                        return (
                                            <option value={value} key={"cate" + index}>{value}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="row">
                            <span className="field">Lizenz*</span>
                            <select name="license" value={query.license} className={isRed && query.license == "" ? "red-border" : ""} onChange={handleChange()}  >
                                {
                                    licences.map(function (value, index) {
                                        return (
                                            <option value={value} key={"cate" + index}>{value}</option>
                                        )
                                    })
                                }
                            </select>

                        </div>
                        <div className="row">
                            <span className="field">Kommentar</span>
                            <textarea placeholder="Hinterlassen Sie Kommentare zu diesem Datensatz" rows="5" type="text" value={query.comment} name="comment" onChange={handleChange()} />
                        </div>
                        <div className="row center">
                            <button type="button" name="submits" className="white-btn" onClick={() => openPopup(true)}>
                                Zurück
                            </button>

                            <button className="black-btn" type="submit" value="submit" name="submit" onClick={(e) => submit(e)}>
                                Weiter
                             </button>
                        </div>

                        </form>



                    </div>}
                {loading &&
                    <Loader />

                }

            </main>


        </div>
    );
}