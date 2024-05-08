import React from 'react'

/* Components */
import Navbar from '../Navbar'
import Footer from '../Footer'
import Totop from '../Totop'

/* Assets */
import Placeholder from '../../assets/Concept/Pic-concept.png'
import Table from '../../assets/cdn/Table.jpg'

function Home() {
    return (
        <>
            <Totop />
            <Navbar />
            <div style={{ paddingTop: '2rem', paddingBottom: '1rem' }} className="container announcement-con px-4">
                <h2 className="pb-2 border-bottom">Announcement - ประกาศ 📢</h2>
                <iframe width='100%' height="50px" scrolling="no" src='https://script.google.com/macros/s/AKfycbxGZa8ZXiPSH2US59SKyL1sVMOSU4qlfNkx0IvVSiJO7JRr0XRZrefTlyajBVO8OL53/exec'></iframe>
            </div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Placeholder} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={Placeholder} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={Placeholder} className="d-block w-100" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom">📅 ตารางเรียน - Timetable</h2>
                <h5 style={{ color: 'red', marginTop: '15px' }}>อัพเดทล่าสุด : 06 พฤษภาคม 2567</h5>
                <p>ตารางเรียน ตารางสอนด้านล่างนี้เป็นฉบับทดลองใช้ในสัปดาห์แรก เริ่มใช้ตั้งแต่วันที่ 07-17 พฤษภาคม 2567<br />กรณีพบข้อผิดพลาด สามารถแจ้งข้อมูลได้ที่ สนง.วิชาการ 2 หรือ ครูที่ปรึกษา เพื่อแก้ไขและประกาศใช้ฉบับปรับปรุงต่อไป</p>
                <img className='d-block w-75' style={{ margin: 'auto', display: 'block' }} src={Table} />
            </div>
            <Footer />
        </>
    )
}

export default Home