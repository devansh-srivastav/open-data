import Head from 'next/head';
import { useState } from 'react';
import Popup from '../components/popup';
import { useRouter } from 'next/router'
import Loader from '../components/loading';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import axios from "axios";

export default function Uploaddata() {


     const apiUrl = "https://opendatabayernbackend.herokuapp.com/api/";
    //const apiUrl = "http://localhost:3100/api/";

    const categories = ["Wählen Sie eine Kategorie","Bevölkerung und Gesellschaft", "Bildung, Kultur und Sport", "Energie", "Gesundheit", "Justiz, Rechtssystem und öffentliche Sicherheit",
        "Landwirtschaft", "Regierung und öffentlicher Sektor", "Regionen und Städte", "Umwelt", "Verkehr", "Wirtschaft und Finanzen", "Wissenschaft und Technologie", "Andere"
    ];
    const licences = ["Wählen Sie eine Lizenz","Datenlizenz Deutschland Namensnennung 2.0",
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
        category: "Bevolkerung und Gesellschaft",
        license: "Creative Commons",
        comment: "",
        date: new Date(),
        type: "file",
        link: "",
        file: "",
        email: "",
        id: "",
    });
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [org, setOrg] = useState("");
    const [fileUrl, setFile] = useState("");
    const [size, setSize] = useState("");
    const [isRed, setRed] = useState(false);
    const [change, setChange] = useState(false);
    const [popupcontent, setContent] = useState("Sind Sie sicher, dass Sie zuruckgehen wollen? Die eingegebenen Daten werden nicht gespeichert.");
    const [popup, openPopup] = useState(false);
    const handleChange = () => (e) => {
        console.log(query.date)
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
        setChange(true);
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
        setFile(localStorage.getItem("email") + "_" + e.target.files[0].name);
        setSize(e.target.files[0].size / 1048576);
        //setQuery({ ...query, email: localStorage.getItem("email") });
        //setQuery({ ...query, file: e.target.files[0].name });
        console.log(query)
        setChange(true);
    };
    const router = useRouter();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwITNaAxw3PgsLYZJ7Fn1oJ2XnPb09BNxo48x1ZCGc5LAdkNmaNt357u9NpR2tmvposbw/exec'

    const submit =async (e) => {
        e.preventDefault();
        if (query.file == "" || query.title == "") {
            conso
            setRed(true);
        }
         else {
            const fileURL = "https://script.google.com/macros/s/AKfycbyYK1-4DkIFQ1Ip4qsieUYVnFvNSPgpGEJkndmaG194BLN9JKlVZDzSL99pDpzEuS2TvA/exec"

            setupload(true);
            let form = document.forms['file upload']
            const file = form.file.files[form.file.files.length-1];
            form = document.forms['file upload'];
            query['email'] = localStorage.getItem('email');
            query['file'] = file.name;

            

            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            const configs = { headers: { 'Content-Type': 'application/json' } };
            let fd = new FormData();
            fd.append('file',file);

            let res = axios.post(apiUrl + "addFileData", fd, config).
                then((res) => {
                    if (res.status == 200) {
                        query['id'] = res.result;
                        let ress = axios.patch(apiUrl + "addData", JSON.stringify(query), configs).
                            then((res) => {
                                if (res.status == 200) {
                                    router.push("/success")
                                }
                            }).catch((err) => {
                                console.log(err)

                                router.push("/error")
                            })
                    }
                }).catch((err) => {
                    console.log(err)
                    router.push("/error")
                })

                    
        }
        return e;
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

                {!loading && <div className="input-screen">
                    <h1>Lokale Datei hochladen</h1>
                    <br />
                    <form className="data-form" name="file upload" method="post" autoComplete="off">
                        <input type="email" value={email} name="email" hidden onChange={() => { }} />
                        <input type="text" value={name} name="name" hidden onChange={() => { }} />
                        <input type="text" value={org} name="org" hidden onChange={() => { }} />
                        <input type="text" value={size} name="size" hidden onChange={() => { }} />
                        <input type="text" value={fileUrl} name="fileUrl" hidden onChange={() => { }} />

                        <div className="row">
                            <span className="field">Datei hochladen</span>
                            <div className="col">
                                <input type="file" className={isRed && query.file == "" ? "red-border file" : "file"} name="file" onChange={handleFileChange()} />
                                {/*<span className={isRed && size > 50 ? "small-err red" : "small-err "}>Die maximale Dateigröße beträgt 50 MB</span>*/}
                            </div>
                        </div>
                        <div className="row">
                            <span className="field">Titel</span>
                            <input type="text" className={isRed && query.title == "" ? "red-border" : ""}  value={query.title} name="title" onChange={handleChange()} />
                        </div>
                        <div className="row">
                            <span className="field">Beschreibung</span>
                            <textarea  rows="5" type="text" value={query.desc} name="desc" onChange={handleChange()} />
                        </div>
                        <div className="row">
                            <span className="field">Keywords</span>
                            <input  type="text" value={query.keys} name="keys" onChange={handleChange()} />
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
                            <textarea rows="5" type="text" value={query.comment} name="comment" onChange={handleChange()} />
                            <div className="row center">
                                <button type="button" name="submits" className="zuruk" onClick={() => (change == true && (query.file != "" || query.title != "" || query.desc!="" || query.comment!="" || query.keys!="" ))?openPopup(true):router.push("/upload")}>
                                    Zurück
                                </button>

                                <button className="weiter" type="submit" value="submit" name="submit" onClick={(e) => submit(e)}>
                                    Hochladen
                                </button>


                            </div>
                        </div>


                    </form>

                    <form className="data-form" name="dummy upload" method="post" autoComplete="off" hidden>
                        <input type="email" value={email} name="email" hidden onChange={() => { }} />
                        <input type="text" value={name} name="name" hidden onChange={() => { }} />
                        <input type="text" value={org} name="org" hidden onChange={() => { }} />
                        <input type="text" value={size} name="size" hidden onChange={() => { }} />
                        <input type="text" value={fileUrl} name="fileUrl" hidden onChange={() => { }} />
                        <input type="text" value={query.date} name="date" hidden onChange={() => { }} />

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

                        <textarea placeholder="Hinterlassen Sie einen optionalen Kommentar zu diesem Datensatz." rows="5" type="text" value={query.comment} name="comment" onChange={handleChange()} />
                        <button type="button" name="submits" className="white-btn" onClick={() => openPopup(true)}>
                            Zurück
                        </button>

                        <button className="black-btn" type="submit" value="submit" name="submit" onClick={(e) => submit(e)}>
                            Hochladen
                        </button>

                    </form>



                </div>}
                {loading &&
                    <Loader />

                }

            </main>

            <Footer />

        </div>
    )
}