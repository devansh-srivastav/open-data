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
    };

    const handleFileChange = () => (e) => {
        setQuery((prevState) => ({
            ...prevState,
            file: e.target.files[0]
        }));
    };

    const submit = () => {
        if (query.url == "") {
            setRed(true);
        }
        else {
            finalSubmit();
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
                {popup && <Popup popup={popup} openpopup={openPopup} finalSubmit={finalSubmit} />}
                {!loading &&
                    <div className="screen">
                        <div className="screen-title">
                            <strong>Link zur Verfügung stellen</strong>
                    </div>
                        <form className="data-form">
                            <div className="row">
                                <span className="field">Resource-URL*</span>
                                <input placeholder="Link zur Quell-Datei" className={isRed && query.url == "" ? "red-border" : ""} type="text" name="url" onChange={handleChange()} />
                            </div>
                            <div className="row">
                                <span className="field">Titel</span>
                                <input placeholder="Name des Datensatzes" type="text" value={query.title} name="title" onChange={handleChange()} />
                            </div>
                            <div className="row">
                                <span className="field">Beschreibung</span>
                                <textarea placeholder="Kurze Beschreibung der hochgeladenen Daten" rows="5" cols="60" type="text" value={query.desc} name="desc" onChange={handleChange()} />
                            </div>
                            <div className="row">
                                <span className="field">Keywords</span>
                                <input placeholder="Schlusselworter, um Ihren Datensatz in der Suche auffindbar zu machen" type="text" value={query.keys} name="keys" onChange={handleChange()} />
                            </div>
                            <div className="row">
                                <span className="field">Kategorie</span>
                                <select name="category" default-value={query.category} value={query.category} onChange={handleChange()}  >
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
                                <span className="field">Lizens</span>
                                <select name="license" value={query.license} onChange={handleChange()}  >
                                    {
                                        licences.map(function (value, index) {
                                            return (
                                                <option value={value} key={"license" + index}>{value}</option>
                                            )
                                        })
                                    }
                                </select>

                            </div>
                            <div className="row">
                                <span className="field">Kommentar</span>
                                <textarea placeholder="Hinterlassen Sie Kommentare zu diesem Datensatz" rows="5" cols="60" type="text" value={query.desc} name="desc" onChange={handleChange()} />
                            </div>
                            <div className="row center">
                                <button type="button" className="white-btn" onClick={() => cancel()}>
                                    Zurück
                            </button>

                                <button type="button" className="black-btn" onClick={() => submit()}>
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