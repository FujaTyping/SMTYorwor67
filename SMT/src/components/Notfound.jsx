import React from 'react'
import { Link } from "react-router-dom";

/* Components */
import Navbar from './Navbar'
import Footer from './Footer'
import Totop from './Totop'

/* Assets */
import Gif from '../assets/404.gif'

function Notfound() {
    return (
        <>
            <Totop />
            <Navbar />
            <div className="px-4 py-5 my-5 text-center">
                <img className='d-block' style={{ margin: 'auto', display: 'block', width: '35%' }} src={Gif} />
                <h1 className="display-5 fw-bold text-body-emphasis">หลงทางรึเปล่า ?</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">มีใครอยู่ไหม ? ดูเหมือนว่าคุณจะหลงทางนะ ! ไม่พบหน้าที่คุณต้องการ กลับไปที่หน้าแรก เพื่อ ดำเนินการต่อการต่อ</p>
                </div>
                <Link to="/" type="button" class="btn btn-outline-primary"><span class="material-symbols-outlined Gicon">home</span> กลับไปหน้าหลัก</Link>
            </div>
            <Footer />
        </>
    )
}

export default Notfound