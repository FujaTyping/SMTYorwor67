import React from 'react'
import { Link } from "react-router-dom";

/* Assets */
import YorworLogo from '../assets/Yorwor.png'

function Navbar() {
  return (
    <>
      <div className="container nav-container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img style={{ width: '50px' }} src={YorworLogo} />
            <span style={{ color: 'white' }} className="fs-4">ม.4/5 SMT</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item"><Link to="/" className="nav-link topnav">หน้าหลัก</Link></li>
            <div className="dropdown">
              <a className="nav-link topnav dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ฝ่ายการเรียน
              </a>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/homework">การบ้าน & รหัสห้องเรียน</Link></li>
                <li><Link className="dropdown-item" to="/score">เช็คคะแนน</Link></li>
              </ul>
            </div>
            <li className="nav-item"><Link to="/work" className="nav-link topnav">ฝ่ายการงาน</Link></li>
            <li className="nav-item"><Link to="/inspector" className="nav-link topnav">ฝ่ายสารวัตร</Link></li>
            <li className="nav-item"><Link to="/event" className="nav-link topnav">ฝ่ายกิจกรรม</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link topnav">เกี่ยวกับพวกเรา</Link></li>
          </ul>
        </header>
      </div>
    </>
  )
}

export default Navbar