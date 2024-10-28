import logo from '../img/logo.png'
import '../App.css'
import React, { useState } from 'react';
// function dropdown() {
//     const menu = document.querySelectorAll(".menudrop")
// }

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt='logo' style={imgstyle}></img>
      <ul className="navbar-menu">
        <li className="navbar-item">BERANDA</li>
        <li 
          className="navbar-item dropdown" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          TENTANG PENS
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Tentang PENS</li>
              <li className="dropdown-item">Visi Misi</li>
              <li className="dropdown-item">Struktur Organisasi</li>
              <li className="dropdown-item">Profil Direksi</li>
              <li className="dropdown-item">Susunan Senat</li>
              <li className="dropdown-item">Kalender Akademik</li>
              <li className="dropdown-item">Hymne PENS</li>
              <li className="dropdown-item">Peraturan Akademik</li>
              <li className="dropdown-item">Pedoman sistem identitas</li>
              <li className="dropdown-item">Akses ke PENS</li>
            </ul>
          )}
        </li>

        <li 
          className="navbar-item dropdown" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          AKADEMIK
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Tentang PENS</li>
              <li className="dropdown-item">Visi Misi</li>
              <li className="dropdown-item">Struktur Organisasi</li>
            </ul>
          )}
        </li>
        <li className="navbar-item">LAYANAN</li>
        <li className="navbar-item">PPID</li>
        <li className="navbar-item">KONTAK</li>
        <li className="navbar-item">VIRTUAL TOUR</li>
        
        
        
        <li className="navbar-item">CONTACT</li>
      </ul>
    </nav>
  );
}

export default Header

const imgstyle = {
    width: '8vw',
    height: '8vh'
}