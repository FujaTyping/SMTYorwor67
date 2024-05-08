import React from 'react'
import '../animista.css'

/* Script */
import { Check_scroll, GoTop } from '../index.js'

function Totop() {
    const Tophandle = () => {
        GoTop();
    };

    React.useEffect(() => {
        window.onscroll = function () {
            Check_scroll();
        };
    })

    return (
        <>
            <button onClick={Tophandle} id='TopButton' style={{ borderRadius: '50%', width: '55px', height: '55px', display: 'none' }} type="button" className="btn btn-outline-primary button-top slide-in-blurred-bottom"><span className="material-symbols-outlined Gicon">navigation</span></button>
        </>
    )
}

export default Totop