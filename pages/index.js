import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/footer.js';

export default function Home() {
    return (
        <div className="container">
      <Head>
        <title>Open Data Bayern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

                <div className="main-screen">
                    <div className="first">
                        <h1 className="mt0"><span className="blue">Open Data</span> für ein <br />
                         smartes und partizipatives bayern.</h1>
                        <br />
                        <div className="row first-mid-sent">
                            <svg width="30" height="20" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 1L0 0.999998" stroke="black" />
                            </svg>

                           <h3 className="mt0 mr0 ml0">Veröffentlichen Sie Ihre Daten auf der Open Data  <br/>
                                Plattform Bayern und machen so Ihre Daten für  <br/>
                               die eine breitere Öffentlichkeit auffindbar.
                           </h3>
                        </div>

                        <div className="btn-blue">
                            <Link href='/login'>
                                <a>
                                     <p>Daten hochladen</p>
                                </a>
                            </Link>
                           
                        </div>
                     </div>
                    <div className="sec">
                        <h3 className="mt0 mr0 ml0 ">Um Bayern erfolgreich in eine<br />
                            digitale Zukunft zu navigieren,<br />
                            benötigen wir<span className="blue"> Ihre Unterstützung. </span>
                           
                        </h3>
                        <div>
                        <div className="row mt-10 ml0">
                            <svg width="50" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="black" />
                                <path d="M15.4501 8.65302V19.25H13.3583V11.0644L10.8452 11.8633V10.2146L15.2249 8.65302H15.4501Z" fill="white" />
                            </svg>


                            <h4 className="mt0 mr0 ml0">Hinterlassen Sie Name, Kontaktdaten und<br/> den Namen Ihrer Organisation.
                           </h4>
                        </div>
                        <div className="row mt-40">
                                <svg width="50" height="55" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="black" />
                                <path d="M17.5854 17.6158V19.25H10.3513V17.8555L13.7723 14.1876C14.1161 13.805 14.3872 13.4685 14.5858 13.178C14.7843 12.8826 14.9271 12.6187 15.0143 12.3863C15.1063 12.149 15.1523 11.9239 15.1523 11.7108C15.1523 11.3912 15.099 11.1177 14.9925 10.8901C14.886 10.6577 14.7286 10.4785 14.5204 10.3526C14.317 10.2267 14.0652 10.1638 13.765 10.1638C13.4454 10.1638 13.1694 10.2412 12.937 10.3962C12.7094 10.5511 12.5351 10.7666 12.4141 11.0426C12.2979 11.3186 12.2397 11.6309 12.2397 11.9796H10.1407C10.1407 11.3501 10.2908 10.7739 10.591 10.2509C10.8912 9.72312 11.3149 9.30428 11.8621 8.99438C12.4092 8.67965 13.0581 8.52228 13.8086 8.52228C14.5494 8.52228 15.1741 8.64333 15.6825 8.88544C16.1958 9.1227 16.5831 9.46649 16.8446 9.91681C17.1109 10.3623 17.2441 10.8949 17.2441 11.5147C17.2441 11.8633 17.1884 12.2047 17.077 12.5388C16.9657 12.8681 16.8059 13.1973 16.5977 13.5266C16.3943 13.851 16.1473 14.1803 15.8568 14.5144C15.5663 14.8485 15.2443 15.1947 14.8908 15.553L13.0532 17.6158H17.5854Z" fill="white" />
                            </svg>


                            <h4 className="mt0 mr0 ml10">Stellen Sie den Datensatz per Link zur Verfügung <br/>
                            oder laden Sie eine lokale Datei hoch.
                           </h4>
                            </div>
                        </div>


                        <div>
                            <h3>
                                Was passiert mit den Daten nach dem Hochladen?
                            </h3>
                            <h4>
                                Dies ist ein Pilotprojekt der Digitalschmiede Bayern in Kooperation mit der Digital Product School und dem Bayerischen Staatsministerium für Digitales.
                            </h4>
                        </div>
                    </div>
                   
                </div>
                <Footer />
{/*            <h1>Open Data für ein*/}
{/*smartes und partizipatives Bayern.</h1>*/}
{/*            <p className="text-2">Veröffentlichen Sie Ihre Daten auf der Open Data Plattform Bayern und machen so Ihre Daten für die eine breitere Öffentlichkeit auffindbar.</p>*/}
{/*            <div className="frame-1">*/}
{/*                <p className="text-3">Daten hochladen</p>*/}
{/*            </div>*/}
{/*            <div className="line-2-0" />*/}
{/*            <p className="text-4">Um Bayern erfolgreich in eine digitale Zukunft zu navigieren, benötigen wir Ihre Unterstützung.</p>*/}
{/*            <div className="group-3-5">*/}
{/*                <div className="ellipse-5" />*/}
{/*                <p className="text-5">1</p>*/}
{/*            </div>*/}
{/*            <div className="group-3-6">*/}
{/*                <div className="ellipse-5" />*/}
{/*                <p className="text-6">2</p>*/}
{/*            </div>*/}
{/*            <p className="text-7">Hinterlassen Sie Name, Kontaktdaten und den Namen Ihrer Organisation.</p>*/}
{/*            <p className="text-8">Stellen Sie den Datensatz per Link zur Verfügung oder laden Sie eine lokale Datei hoch.</p>*/}
{/*            <p className="text-9">Derzeit arbeiten wir an der automatischen Aufbereitung des Datensatzes, so dass dieser je nach Lizenz Ihres Datensatzes an das Bundesportal GOVDATA.de weitergeleitet werden kann.</p>*/}
{/*            <p className="text-1-0">Was passiert mit den Daten nach dem Hochladen?</p>*/}
{/*            <div className="line-2-1" />*/}
{/*            <p className="text-1-1">Dies ist ein Pilotprojekt der Digitalschmiede Bayern in Kooperation mit der Digital Product School und dem Bayerischen Staatsministerium für Digitales.</p>*/}
{/*            <img src="" />*/}
{/*            <div className="logo-_-d-p-s">*/}
{/*                <img src="" />*/}
{/*                <img src="" />*/}
{/*            </div>*/}
{/*            <div className="line-2-6" />*/}


            <style jsx global>{`
            .screen {
                            height: 600px;
                width: 1200px;
                background-color: #ffffff;
            }
            .text-1 {
                 text-align: left;
                vertical-align: top;
                font-size: 34px;
                font-family: undefined;
                line-height: 129.99999523162842 %;
            }
            .text-2 {
                            text-align: left;
                vertical-align: top;
                font-size: 18px;
                font-family: Roboto;
                line-height: 150 %;
                color: #000000;
            }
            .frame-1 {
                            border-radius: 0.5rem;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0.5rem 1rem;
                gap: 0.625rem;
                background-color: #5b75ff;
            }
            .text-3 {
                            text-align: center;
                vertical-align: top;
                font-size: 14px;
                font-family: Roboto;
                line-height: 150 %;
                color: #ffffff;
            }
            .line-2-0 {
                            transform: rotate(179deg);
                height: 0px;
                width: 26px;
                border: 0.0625rem solid #000000;
            }
            .text-4 {
                            text-align: left;
                vertical-align: top;
                font-size: 18px;
                font-family: undefined;
                line-height: 139.9999976158142 %;
            }
            .group-3-5 {
                            height: 28px;
                width: 28px;
            }
            .ellipse-5 {
                            height: 28px;
                width: 28px;
            }
            .text-5 {
                            text-align: left;
                vertical-align: top;
                font-size: 14.875px;
                font-family: Roboto;
                line-height: auto;
                color: #ffffff;
            }
            .group-3-6 {
                            height: 28px;
                width: 28px;
            }
            .ellipse-5 {
                            height: 28px;
                width: 28px;
            }
            .text-6 {
                text-align: left;
                vertical-align: top;
                font-size: 14.875px;
                font-family: Roboto;
                line-height: auto;
                color: #ffffff;
            }
            .text-7 {
                            text-align: left;
                vertical-align: top;
                font-size: 13px;
                font-family: Roboto;
                line-height: 129.99999523162842 %;
                color: #000000;
            }
            .text-8 {
                            text-align: left;
                vertical-align: top;
                font-size: 13px;
                font-family: Roboto;
                line-height: 129.99999523162842 %;
                color: #000000;
            }
            .text-9 {
                            text-align: left;
                vertical-align: top;
                font-size: 13px;
                font-family: Roboto;
                line-height: 129.99999523162842 %;
                color: #000000;
            }
            .text-1-0 {
                            text-align: left;
                vertical-align: top;
                font-size: 14px;
                font-family: Roboto;
                line-height: 150 %;
                color: #000000;
            }
            .line-2-1 {
                            height: 0px;
                width: 1200px;
                border: 0.0625rem solid #000000;
            }
            .text-1-1 {
                            text-align: left;
                vertical-align: top;
                font-size: 8px;
                font-family: Roboto;
                line-height: 129.99999523162842 %;
                color: #000000;
            }
            .img-1-2 {
                            height: 22px;
                width: 64px;
            }
            .logo-_-d-p-s {
                            height: 18px;
                width: 126px;
            }
            .img-1-3 {
                            height: 17px;
                width: 52px;
            }
            .img-1-4 {
                            height: 18px;
                width: 18px;
            }
            .line-2-6 {
                            transform: rotate(89deg);
                height: 0px;
                width: 552px;
                border: 0.0625rem solid #000000;
            }        `}</style>
            </main>
        </div>
    )
}

