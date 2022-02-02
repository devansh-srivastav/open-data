import Head from 'next/head';
import { useRouter } from 'next/router';


export default function Popup(props) {
   console.log(props)
   return (
       <div className="popup-outer relative">
           
           <div className="popup">
               <div className="top-right" onClick={() => props.openpopup(false)}>
                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M14 1.415L12.585 0L7 5.585L1.415 0L0 1.415L5.585 7L0 12.585L1.415 14L7 8.415L12.585 14L14 12.585L8.415 7L14 1.415Z" fill="black" />
                   </svg>
               </div>
               <div className="login-details">
                   Zuruk
                </div>
               
               <div>
                   Sind Sie sicher,dass Sie zuruckgehen wollen?<br /> Die eingegebenen Daten wurden noch nicht<br />hochgeladen und konnten verloren gehen.
               </div>
               <div className="row center">
                   
                   <button type="button" className="black-btn" onClick={() => props.finalSubmit()}>
                       Vorgang abbrechen
                   </button>
               </div>
           </div>
           
        </div>
    )
}