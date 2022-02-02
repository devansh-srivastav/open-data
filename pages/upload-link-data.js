import Head from 'next/head';
import { useState } from 'react';
import Popup from '../components/popup'

export default function Home() {


    const [query, setQuery] = useState({
        title: "",
        desc: "",
        keys: "",
        url: "",
        category: "Bevolkerung und Gesellschaft",
        license: "Creative Commons",
        comment: ""
    });

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
        console.log(query);
        openPopup(true);
    }

    const finalSubmit = () => {

    }
    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {popup && <Popup popup={popup} openpopup={openpopup} finalSubmit={finalSubmit}/>}

                <div className="screen">
                    <div className="screen-title">
                        Datei hochladen
                    </div>
                    <form className="data-form">
                        <div className="row">
                            <span className="field">Resource-URL*</span>
                            <input placeholder="Link zur Quell-Datei" type="text" name="file" onChange={handleChange()} />
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
                                <option value="Bevolkerung und Gesellschaft" disabled>Bevolkerung und Gesellschaft</option>
                                <option value="a">Volvo</option>
                                <option value="b">Saab</option>
                                <option value="s">Mercedes</option>
                                <option value="xjws">Audi</option>
                            </select>
                        </div>
                        <div className="row">
                            <span className="field">Lizens</span>
                            <select name="license" value={query.license} onChange={handleChange()}  >
                                <option value="Creative Commons">Creative Commons</option>
                                <option value="a">Volvo</option>
                                <option value="b">Saab</option>
                                <option value="s">Mercedes</option>
                                <option value="xjws">Audi</option>
                            </select>

                        </div>
                        <div className="row">
                            <span className="field">Kommentar</span>
                            <textarea placeholder="Hinterlassen Sie Kommentare zu diesem Datensatz" rows="5" cols="60" type="text" value={query.desc} name="desc" onChange={handleChange()} />
                        </div>
                        <div className="row center">
                            <button type="button" className="white-btn" onClick={() => cancel()}>
                                Zuruck
                            </button>

                            <button type="button" className="black-btn" onClick={() => submit()}>
                                Weiter
                             </button>
                        </div>

                    </form>



                </div>

            </main>


        </div>
    )
}