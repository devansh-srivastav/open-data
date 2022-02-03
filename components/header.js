import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/Link'

export default function Header() {

    const login = () => {
        console.log("a")
        window.open("/login", "_self");
    }
    const router = useRouter();
    const path = router.pathname;
    return (
        <div className="header-containers">
            <header className="header">
                <div className="header-div">
                    {path == '/' && <Link href='/'><a><div> <strong>⚫ Open-Data Plattform Bayern</strong></div></a></Link>}
                    {path == '/login' && <Link href='/'><a><div> <strong>⚫ Open-Data Plattform Bayern</strong></div></a></Link>}
                    {path != '/' && path != '/login' && <Link href='/dashboard'><a><div> <strong>⚫ Open-Data Plattform Bayern</strong></div></a></Link>}
                    
                    <div>
                        {/* {path=='/' && <button onClick={() => login()} className="button">
                            <h3>Einloggen</h3>
                        </button>
                        } */}
                        {path == '/' && <button className="button">
                            <Link href='/login'>
                                <a>
                                    <h3>Einloggen &rarr;</h3>
                                </a>
                            </Link>
                        </button>
                        }

                        {path != '/' && path!='/login' && <button className="button">
                            <Link href='/'>
                                <a>
                                    <h3>Ausloggen  &rarr;</h3>
                                </a>
                            </Link>
                        </button>
                        }

                    </div>
                </div>
            </header>
            
            <style jsx>{`

          

        .header-containers {
          min-width:100%;
        }
        .header{
                height:80px;
                padding:10px  10%;
                background-color:#F2F2F2;
                width:100%;
               
          }
          .header-div{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items:center;
                height:100%;
           }
        .header button{
             background-color:transparent;
        }

        `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
