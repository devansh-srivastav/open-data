import Head from 'next/head';
import { useState } from 'react';
import Popup from '../components/popup';
import { useRouter } from 'next/router'
import Loader from '../components/loading';

export default function Uploaddata() {


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


    const [query, setQuery] = useState({
        title: "",
        desc: "",
        keys: "",
        file: "",
        category: "Bevolkerung und Gesellschaft",
        license: "Creative Commons",
        comment: "",
    });
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [org, setOrg] = useState("");
    const [fileUrl, setFile] = useState("");
    const [size, setSize] = useState("");
    const [isRed, setRed] = useState(false);
    const [popupcontent, setContent] = useState("Sind Sie sicher, dass Sie zuruckgehen wollen? Die eingegebenen Daten werden nicht gespeichert.");
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
        setEmail(localStorage.getItem("email"));
        setName(localStorage.getItem("name"));
        setOrg(localStorage.getItem("org"));
        setFile(localStorage.getItem("email")+"_"+e.target.files[0].name);
        setSize(e.target.files[0].size/1048576);
    };
    const router = useRouter();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwITNaAxw3PgsLYZJ7Fn1oJ2XnPb09BNxo48x1ZCGc5LAdkNmaNt357u9NpR2tmvposbw/exec'
    
    const submit = (e) => {
        e.preventDefault();
        if (query.file == "") {
            setRed(true);
        }
        else {
            const fileURL = "https://script.google.com/macros/s/AKfycbyYK1-4DkIFQ1Ip4qsieUYVnFvNSPgpGEJkndmaG194BLN9JKlVZDzSL99pDpzEuS2TvA/exec"
            
            setupload(true);
            let form = document.forms['file upload']
            let form2 = document.forms['dummy upload']
            const file = form.file.files[0];
            form = document.forms['file upload'];
            console.log(file.size)
            if (file.size < 50 * 1048576) {
                const fr = new FileReader();
                fr.readAsArrayBuffer(file);
                fr.onload = f => {
                    let newName =email + "_" + file.name;
                    const orgName = file.name;
                    if (orgName.includes(".")) {
                        const orgExt = orgName.split(".").pop();
                        if (orgExt != newName.split(".").pop()) {
                            newName = newName ? `${newName}.${orgExt}` : orgName;
                        }
                    }
                    const qs = new URLSearchParams({ filename: newName, mimeType: file.type });  // Modified


                    fetch(`${fileURL}?${qs}`, { method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)]), mode: 'no-cors', headers: { cookie: 'ip2loc=isset' } })
                        .then(res => res.json)
                        .then(e => {
                            // setFile(e != undefined ? e.fileUrl : "")
                            fetch(scriptURL, { method: 'POST', body: new FormData(form2), mode: 'no-cors', headers: { cookie: 'ip2loc=isset' } })
                                .then(response => router.push("/success"))
                                .catch(error => router.push("/error"))
                        }
                        )  // <--- You can retrieve the returned value here.
                        .catch(err => {
                            router.push("/error")
                        });


                }
            }
            else {
                fetch(scriptURL, { method: 'POST', body: new FormData(form2), mode: 'no-cors', headers: { cookie: 'ip2loc=isset' } })
                    .then(response => router.push("/success"))
                    .catch(error => router.push("/error"))
            }
        }
    }

    
    return (
        <div className="upload-container container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

                {popup && <Popup popup={popup} openpopup={openPopup} />}

                {!loading && <div className="screen">
                    <div className="screen-title">
                        <strong>Datei hochladen</strong>
                    </div>

                    <form className="data-form" name="file upload" method="post" autoComplete="off">
                        <input type="email" value={email} name="email" hidden onChange={() => { } }/>
                        <input type="text" value={name} name="name" hidden onChange={() => { } }/>
                        <input type="text" value={org} name="org" hidden onChange={() => { }} />
                        <input type="text" value={size} name="size" hidden onChange={() => { }} />
                        <input type="text" value={fileUrl} name="fileUrl" hidden onChange={() => { }} />
                        <div className="row">
                            <span className="field">Datei hochladen*</span>
                            <input placeholder="Datei auswahlen" type="file" className={isRed && query.file == "" ? "red-border" : ""} name="file" onChange={handleFileChange()} />
                        </div>
                        <div className="row">
                            <span className="field">Titel</span>
                            <input placeholder="Name des Datensatzes" type="text" value={query.title} name="title" onChange={handleChange()} />
                        </div>
                        <div className="row">
                            <span className="field">Beschreibung</span>
                            <textarea placeholder="Kurze Beschreibung der hochgeladenen Daten" rows="5" type="text" value={query.desc} name="desc" onChange={handleChange()} />
                        </div>
                        <div className="row">
                            <span className="field">Keywords</span>
                            <input placeholder="Schlüsselwörter, um Ihren Datensatz in der Suche auffindbar zu machen" type="text" value={query.keys} name="keys" onChange={handleChange()} />
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
                            <span className="field">Lizenz</span>
                            <select name="license" value={query.license} onChange={handleChange()}  >
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

                    <form className="data-form" name="dummy upload" method="post" autoComplete="off" hidden>
                        <input type="email" value={email} name="email" hidden onChange={() => { }} />
                        <input type="text" value={name} name="name" hidden onChange={() => { }} />
                        <input type="text" value={org} name="org" hidden onChange={() => { }} />
                        <input type="text" value={size} name="size" hidden onChange={() => { }} />
                        <input type="text" value={fileUrl} name="fileUrl" hidden onChange={() => { }} />
                        <input placeholder="Datei auswahlen" type="file" className={isRed && query.file == "" ? "red-border" : ""} name="file" onChange={handleFileChange()} />
                        
                       <textarea placeholder="Kurze Beschreibung der hochgeladenen Daten" rows="5" type="text" value={query.desc} name="desc" onChange={handleChange()} />
                        <input placeholder="Schlüsselwörter, um Ihren Datensatz in der Suche auffindbar zu machen" type="text" value={query.keys} name="keys" onChange={handleChange()} />
                        <select name="category" default-value={query.category} value={query.category} onChange={handleChange()}  >
                                {
                                    categories.map(function (value, index) {
                                        return (
                                            <option value={value} key={"cate" + index}>{value}</option>
                                        )
                                    })
                                }
                            </select>
                        <select name="license" value={query.license} onChange={handleChange()}  >
                                {
                                    licences.map(function (value, index) {
                                        return (
                                            <option value={value} key={"cate" + index}>{value}</option>
                                        )
                                    })
                                }
                            </select>

                       <textarea placeholder="Hinterlassen Sie Kommentare zu diesem Datensatz" rows="5" type="text" value={query.comment} name="comment" onChange={handleChange()} />
                        <button type="button" name="submits" className="white-btn" onClick={() => openPopup(true)}>
                                Zurück
                            </button>

                            <button className="black-btn" type="submit" value="submit" name="submit" onClick={(e) => submit(e)}>
                                Weiter
                             </button>
                      
                    </form>



                </div>}
                {loading &&
                    <Loader />

                }
            </main>
            


        </div>
    )
}