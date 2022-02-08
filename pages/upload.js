import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Home() {
    const Router = useRouter();
    const open = (type) => {
        if (type == "data") {
            Router.push("/upload-data");
        }
        else if (type == "link") {
            Router.push("/upload-link-data");
        }
        else if (type == "meta") {
            Router.push("/upload-meta-data");
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
                   
                    <div className="login-detail">
                        <p className="s-22 bold">
                            Auf welche Weise möchten Sie Ihre Daten veröffentlichen?
                        </p>
                    </div>

                    <div className="upload-grid">
                        <div className="card-grid">
                            <div className="cards" onClick={() => {open("data")}}>
                                <p className="s-16 ">Datei hochladen</p>
                                <p className="s-12">Alle Dateiformate</p>
                                </div>
                           

                             <div className="cards" onClick={() => { open("link") }}>
                                <p className="s-16 ">Link zur Verfügung stellen</p>
                                <p className="s-12">URL</p>
                                </div>

                             <div className="cards" onClick={() => { open("meta") }}>
                                <p className="s-16 ">Meta-Data hochladen</p>
                                <p className="s-12">RDF-Datei</p>
                                </div>
                        </div>

                    </div>

                    <div className="small-comment row center full-center full-w">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1.5H3C2.17125 1.5 1.5075 2.17125 1.5075 3L1.5 16.5L4.5 13.5H15C15.8288 13.5 16.5 12.8288 16.5 12V3C16.5 2.17125 15.8288 1.5 15 1.5ZM9.75 10.5H8.25V9H9.75V10.5ZM9.75 7.5H8.25V4.5H9.75V7.5Z" fill="black" />
                        </svg>
                        <p className="s-12"><a href="mailto: olga.popova@dpschool.io" className="s-12">kontaktieren</a> Sie uns gerne, wenn Sie Hilfe beim Hochladen benötigen.</p>

                    </div>

                </div>

            </main>


        </div>
    )
}