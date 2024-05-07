import React from 'react'
import './Navbar.css'

/* Assets */
import YorworLogo from '../assets/Yorwor.png'

function Navbar() {
  return (
    <>
      <a href="/" class="logo">
        <img src={YorworLogo} />
      </a>

      <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li><a href="/">หน้าหลัก</a></li>
          <li><a href="/study">ฝ่ายการเรียน</a></li>
          <li><a href="/work">ฝ่ายการงาน</a></li>
          <li><a href="/event">ฝ่ายกิจกรรม</a></li>
          <li><a href="/inspector">ฝ่ายสารวัตร</a></li>
          <li><a href="/about">เกี่ยวกับพวกเรา</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar