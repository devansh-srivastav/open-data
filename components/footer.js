import React, { Component, Fragment } from "react";



class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="main-screen2">
                    <div className="first">
                        <h4>Dies ist ein Pilotprojekt der Digitalschmiede Bayern in Kooperation mit der Digital <br />Product School und dem Bayerischen Staatsministerium für Digitales.</h4>
                    </div>
                    <div className='sec'>
                        <img
                            src="/dps-logo.svg"
                            alt="dps-logo"
                            width={100}
                            height={80}
                        />
                        <img
                            src="/digital-logo.svg"
                            alt="dps-logo"
                            width={100}
                            height={80}
                        />
                        <img
                            src="/bsmd-logo.svg"
                            alt="dps-logo"
                            width={100}
                            height={65}
                        />
                    </div>
                </div>

               

            </footer>
        );
    }
}

export default Footer;

