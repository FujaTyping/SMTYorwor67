import React from 'react'

/* Assets */
import Spacer from '../assets/Spacer.png'

function Footer() {
    return (
        <>
            <img style={{ width: '100%' }} src={Spacer} />
            <div className='footer-container'>
                <div className="container">
                    <footer className="py-3">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="https://yorworplatform.com/" className="nav-link px-2 white">Yorwor Platform</a></li>
                            <li className="nav-item"><a href="https://sites.google.com/hatyaiwit.ac.th/innovative-center/%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%81" className="nav-link px-2 white">Innovative Center</a></li>
                            <li className="nav-item"><a href="https://www.hatyaiwit.ac.th/" className="nav-link px-2 white">เว็ปโรงเรียน</a></li>
                            <li className="nav-item"><a href="http://202.129.48.202/" className="nav-link px-2 white">ระเบียนผลการเรียน</a></li>
                        </ul>
                        <p className="text-center">© 2567 Siraphop Sukchu</p>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer