import Head from 'next/head';
import { useState } from 'react';
import Popup from '../components/popup';
import { useRouter } from 'next/router';
import Loader from '../components/loading'

export default function Uploadmetadata() {

    const [query, setQuery] = useState({
        file: "",
        comment:""
    });
    const [isRed, setRed] = useState(false);
    const [popup, openPopup] = useState(false);
    

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [org, setOrg] = useState("");
    const [fileUrl, setFile] = useState("");
    const [size, setSize] = useState("");
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
        setSize(e.target.files[0].size / 1048576);
    };
    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));

    };
    const submit = (e) => {
        e.preventDefault();
        if (query.file == "") {
            setRed(true);
        }
        else {
            const fileURL = "https://script.google.com/macros/s/AKfycbw9WhoBabZne9NsPem60x7aZXyS3IlVmmr71E69EcS8I6_GBUQXUKgiVyw-qwt5CTPb/exec"

            const scriptURL = 'https://script.google.com/macros/s/AKfycbwG1n4f10_HEZ_Llyjla7sE35s7uLfBeRZFK7VqhPDr2hAl8nkwf_aWbcpX0GRQmUIBvg/exec'

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
                    let newName = email+"_"+file.name;
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

                {popup && <Popup popup={popup} openpopup={openPopup} />}

                {!loading && <div className="screen">
                    <div className="screen-title">
                        <strong>Meta-dada hochladen</strong>
                    </div>

                    <form className="data-form" name="file upload" method="post" autoComplete="off">
                        <div className="row">
                            <span className="field">RDF-Datei hochladen*</span>
                            <input placeholder="Datei auswahlen" type="file" className={isRed && query.file == "" ? "red-border" : ""} name="file" onChange={handleFileChange()} />
                        </div>

                        <div className="row">
                            <span className="field">Kommentar</span>
                            <textarea placeholder="Hinterlassen Sie Kommentare zu diesem Datensatz" rows="5" type="text" value={query.comment} name="comment" onChange={handleChange()} />
                        </div>
                        <div className="row center">
                            <button type="button" value="submit" name="submits"  className="white-btn" onClick={() => openPopup(true)}>
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
                        
                        <textarea placeholder="Hinterlassen Sie Kommentare zu diesem Datensatz" rows="5" type="text" value={query.comment} name="comment" onChange={handleChange()} />
                        <button type="button" name="submits" className="white-btn" onClick={() => openPopup(true)}>
                            Zurück
                            </button>

                        <button className="black-btn" type="submit" value="submit" name="submit" onClick={(e) => submit(e)}>
                            Weiter
                        </button>

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