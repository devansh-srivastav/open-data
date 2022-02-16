import React, { Component, Fragment } from "react";



class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="main-screen2">
                    <div className="first">
                        <h5>Dies ist ein Pilotprojekt der Digitalschmiede Bayern in Kooperation mit der Digital <br />Product School und dem Bayerischen Staatsministerium für Digitales.</h5>
                    </div>
                    <div className='sec'>
                    <div className='foot-logo'>
                        <img className='dsch-logo'
                            src="/digital-logo.svg"
                            alt="dps-logo"
                            width={100}
                            height={80}
                        />
                        <img className='dps-logo'
                            src="/dps-logo.svg"
                            alt="dps-logo"
                            width={100}
                            height={80}
                        />
                        <img className='min-logo'
                            src="/bsmd-logo.svg"
                            alt="dps-logo"
                            width={100}
                            height={35}
                        />
                    </div>
                    </div>
                </div>

               

            </footer>
        );
    }
}

export default Footer;

