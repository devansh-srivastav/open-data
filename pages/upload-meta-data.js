import Head from 'next/head';
import { useState } from 'react';
import Popup from '../components/popup';
import { useRouter } from 'next/router';
import Loader from '../components/loading'

export default function Uploadmetadata() {

    const [query, setQuery] = useState({
       file: ""
    });
    const [isRed, setRed] = useState(false);
    const [popup, openPopup] = useState(false);
    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    const [loading, setupload] = useState(false);
    const handleFileChange = () => (e) => {
        setQuery((prevState) => ({
            ...prevState,
            file: e.target.files[0]
        }));
    };

    const submit = () => {
        if (query.file == "") {
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

    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

                {popup && <Popup popup={popup} openpopup={openPopup} finalSubmit={finalSubmit} />}

                {!loading && <div className="screen">
                    <div className="screen-title">
                        <strong>Meta-dada hochladen</strong>
                    </div>

                    <form className="data-form">
                        <div className="row">
                            <span className="field">RDF-Datei hochladen*</span>
                            <input placeholder="Datei auswahlen" type="file" className={isRed && query.file == "" ? "red-border" : ""} name="file" onChange={handleFileChange()} />
                        </div>

                        <div className="row">
                            <span className="field">Kommentar</span>
                            <textarea placeholder="Hinterlassen Sie Kommentare zu diesem Datensatz" rows="5" type="text" value={query.desc} name="desc" onChange={handleChange()} />
                        </div>
                        <div className="row center">
                            <button type="button" className="white-btn" onClick={() => openPopup(true)}>
                                Zurück
                            </button>

                            <button type="button" className="black-btn" onClick={() => submit()}>
                                Weiter
                             </button>
                        </div>

                    </form>



                </div>}
                {
                    loading &&
                    <Loader />
                }

            </main>


        </div>
    )
}